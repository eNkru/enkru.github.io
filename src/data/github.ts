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
 * Empty fallback — if GitHub API fails, show loading state rather than stale data.
 * Consider implementing a separate cache mechanism if offline support is needed.
 */
export const STATIC_REPOS: GitHubRepo[] = []
