export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  homepage: string | null
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
  topics: string[]
}

export const GITHUB_USERNAME = 'enkru'

/**
 * Preferred featured repos (order preserved).
 * Missing names are skipped; selection falls back to stars then recency.
 */
export const PINNED_REPOS: string[] = [
  'freelook',
  'freechat',
  'electron-xiami',
  'mango-next',
]

export const FEATURED_REPO_LIMIT = 4

/**
 * Empty fallback — if GitHub API fails, show loading state rather than stale data.
 * Consider implementing a separate cache mechanism if offline support is needed.
 */
export const STATIC_REPOS: GitHubRepo[] = []

/**
 * Featured list: pin order first, then starred (desc), then recent (updated_at), cap at N.
 */
export function selectFeaturedRepos(
  repos: GitHubRepo[],
  pinned: string[] = PINNED_REPOS,
  limit: number = FEATURED_REPO_LIMIT,
): GitHubRepo[] {
  if (limit <= 0 || repos.length === 0) return []

  const byName = new Map(repos.map((r) => [r.name, r]))
  const picked: GitHubRepo[] = []
  const pickedIds = new Set<number>()

  const take = (repo: GitHubRepo) => {
    if (pickedIds.has(repo.id)) return
    picked.push(repo)
    pickedIds.add(repo.id)
  }

  for (const name of pinned) {
    const repo = byName.get(name)
    if (repo) take(repo)
    if (picked.length >= limit) return picked
  }

  const starred = [...repos]
    .filter((r) => r.stargazers_count > 0 && !pickedIds.has(r.id))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)

  for (const repo of starred) {
    take(repo)
    if (picked.length >= limit) return picked
  }

  const recent = [...repos]
    .filter((r) => !pickedIds.has(r.id))
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )

  for (const repo of recent) {
    take(repo)
    if (picked.length >= limit) return picked
  }

  return picked
}
