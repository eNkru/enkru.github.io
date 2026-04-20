import { type GitHubRepo } from '../data/github'
import { getLangColor } from '../utils/github-languages'

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
      className="group block rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-3 relative overflow-hidden"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header: repo name + icon */}
      <div className="flex items-start gap-2 relative">
        <svg
          className="flex-shrink-0 mt-0.5 text-slate-500 group-hover:text-blue-400 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <h3 className="text-slate-100 font-bold text-sm leading-snug break-all group-hover:text-white transition-colors">
          {repo.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 relative flex-1">
        {repo.description ?? 'No description provided'}
      </p>

      {/* Topics */}
      {(repo.topics?.length ?? 0) > 0 && (
        <div className="flex flex-wrap gap-1.5 relative">
          {repo.topics?.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 bg-blue-500/10 text-blue-300/80 rounded-full text-[10px] font-medium border border-blue-500/20"
            >
              {topic}
            </span>
          ))}
          {(repo.topics?.length ?? 0) > 4 && (
            <span className="px-2 py-0.5 text-slate-500 text-[10px]">
              +{(repo.topics?.length ?? 0) - 4}
            </span>
          )}
        </div>
      )}

      {/* Footer: language + stats */}
      <div className="flex items-center gap-4 text-[11px] text-slate-500 relative pt-1 border-t border-white/5">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <line x1="18" y1="9" x2="15" y2="15" />
              <line x1="6" y1="9" x2="9" y2="15" />
            </svg>
            {repo.forks_count}
          </span>
        )}
        {repo.homepage && (
          <span className="ml-auto flex items-center gap-0.5 text-blue-400/60 group-hover:text-blue-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            demo
          </span>
        )}
      </div>
    </a>
  )
}
