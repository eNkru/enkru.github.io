import { type GitHubRepo } from '../data/github'
import { getLangColor } from '../utils/github-languages'
import { Star, GitFork, ArrowUpRight } from 'lucide-react'

export interface GitHubRepoCardProps {
  repo: GitHubRepo
}

export function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
  const langColor = getLangColor(repo.language)

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="v-cell v-cell-hover group flex h-full flex-col p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-[15px] font-semibold tracking-[-0.015em] text-foreground break-words">
          {repo.name}
        </h4>
        <ArrowUpRight
          size={15}
          strokeWidth={1.75}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
        {repo.description ?? 'No description provided'}
      </p>

      {(repo.topics?.length ?? 0) > 0 && (
        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {repo.topics?.slice(0, 4).map((topic) => (
            <li key={topic} className="v-pill text-[10.5px]">
              {topic}
            </li>
          ))}
          {(repo.topics?.length ?? 0) > 4 && (
            <li className="v-pill text-[10.5px]">+{(repo.topics?.length ?? 0) - 4}</li>
          )}
        </ul>
      )}

      <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-[11.5px] text-muted-foreground">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 tabular-nums">
            <Star size={11} strokeWidth={1.75} aria-hidden="true" />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1 tabular-nums">
            <GitFork size={11} strokeWidth={1.75} aria-hidden="true" />
            {repo.forks_count}
          </span>
        )}
        {repo.homepage && (
          <span className="ml-auto font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-accent-tertiary)]">
            demo
          </span>
        )}
      </div>
    </a>
  )
}
