import { type GitHubRepo } from '../data/github'
import { getLangColor } from '../utils/github-languages'
import { Star, GitFork, Link } from 'lucide-react'


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
      className="group cyber-card block p-5 flex flex-col gap-3 relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header: repo name */}
      <div className="flex items-start gap-2 relative">
        <svg
          className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-accent transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <h3 className="font-mono text-foreground font-semibold text-sm leading-snug break-all group-hover:text-accent transition-colors">
          {repo.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 relative flex-1">
        {repo.description ?? 'No description provided'}
      </p>

      {/* Topics — clipped technical tags */}
      {(repo.topics?.length ?? 0) > 0 && (
        <div className="flex flex-wrap gap-1.5 relative">
          {repo.topics?.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 bg-accent/10 text-accent/80 text-[10px] font-mono uppercase tracking-wider border border-accent/20"
              style={{ clipPath: 'var(--clip-chamfer-sm)' }}
            >
              {topic}
            </span>
          ))}
          {(repo.topics?.length ?? 0) > 4 && (
            <span className="px-2 py-0.5 text-muted-foreground text-[10px] font-mono">
              +{(repo.topics?.length ?? 0) - 4}
            </span>
          )}
        </div>
      )}

      {/* Footer: language + stats */}
      <div className="flex items-center gap-4 text-[11px] text-muted-foreground relative pt-1 border-t border-border">
        {repo.language && (
          <span className="flex items-center gap-1.5 font-mono">
            <span
              className="w-2 h-2 inline-block"
              style={{ backgroundColor: langColor, clipPath: 'var(--clip-chamfer-sm)' }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 hover:text-accent transition-colors">
            <Star size={11} strokeWidth={1.5} />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <GitFork size={11} strokeWidth={1.5} />
            {repo.forks_count}
          </span>
        )}
        {repo.homepage && (
          <span className="ml-auto flex items-center gap-0.5 text-accent-tertiary/60 group-hover:text-accent-tertiary transition-colors font-mono uppercase tracking-wider text-[10px]">
            <Link size={10} strokeWidth={1.5} />
            demo
          </span>
        )}
      </div>
    </a>
  )
}
