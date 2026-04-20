import { useState, useEffect, useMemo } from 'react'
import { GITHUB_USERNAME, STATIC_REPOS, type GitHubRepo } from '../data/github'
import { computeLanguageStats, type LanguageStat } from '../utils/github-languages'

const CACHE_KEY = `github-repos-${GITHUB_USERNAME}`
const CACHE_TTL_MS = 5 * 60 * 1000 // 5 minutes

interface CachedData {
  timestamp: number
  repos: GitHubRepo[]
}

interface GitHubReposResult {
  repos: GitHubRepo[]
  /** Repos with at least 1 star, sorted by stars descending */
  starredRepos: GitHubRepo[]
  /** Language distribution across all owned repos */
  languageStats: LanguageStat[]
  loading: boolean
  error: string | null
  totalStars: number
  totalForks: number
}

function readCache(): GitHubRepo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const cached: CachedData = JSON.parse(raw)
    if (Date.now() - cached.timestamp < CACHE_TTL_MS) return cached.repos
    localStorage.removeItem(CACHE_KEY)
    return null
  } catch {
    return null
  }
}

function writeCache(repos: GitHubRepo[]): void {
  try {
    const cached: CachedData = { timestamp: Date.now(), repos }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cached))
  } catch {
    // localStorage may be full or unavailable — ignore
  }
}

export function useGitHubRepos(): GitHubReposResult {
  const [initialCached] = useState(() => readCache())
  const [repos, setRepos] = useState<GitHubRepo[]>(initialCached ?? [])
  const [loading, setLoading] = useState(initialCached === null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Cache was already loaded on mount — skip the fetch entirely
    if (initialCached) return

    let cancelled = false

    async function fetchRepos() {
      // Try cache first (for re-renders where mount cache was null)
      const cached = readCache()
      if (cached) {
        if (!cancelled) {
          setRepos(cached)
          setLoading(false)
        }
        return
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30&type=owner`
        )
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        const data: GitHubRepo[] = await res.json()

        if (cancelled) return

        // Filter out forks, sort by stars descending then push date
        const owned = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())

        const result = owned.length > 0 ? owned : STATIC_REPOS
        setRepos(result)
        writeCache(result)
        setError(null)
      } catch (err) {
        if (cancelled) return
        // Fallback to static data on error
        setRepos(STATIC_REPOS)
        setError(err instanceof Error ? err.message : 'Failed to fetch repos')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchRepos()
    return () => { cancelled = true }
  }, [initialCached])

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0)

  const starredRepos = useMemo(
    () => repos.filter((r) => r.stargazers_count > 0).sort((a, b) => b.stargazers_count - a.stargazers_count),
    [repos]
  )

  const languageStats = useMemo(
    () => computeLanguageStats(repos),
    [repos]
  )

  return { repos, starredRepos, languageStats, loading, error, totalStars, totalForks }
}
