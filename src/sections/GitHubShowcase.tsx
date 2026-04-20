import { motion } from 'framer-motion'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import { GitHubRepoCard } from '../components/GitHubRepoCard'
import { LanguageDonut } from '../components/LanguageDonut'
import { StarsBarChart } from '../components/StarsBarChart'
import { GITHUB_USERNAME } from '../data/github'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function GitHubShowcase() {
  const { starredRepos, languageStats, loading, totalStars, totalForks, repos } = useGitHubRepos()

  return (
    <div className="w-screen min-h-screen lg:h-screen overflow-y-auto scrollbar-hidden scroll-fade-y flex items-start justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center mb-3"
        >
          Open Source
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mx-auto mb-8"
        />

        {!loading && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Profile link + stats row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 group"
              >
                <svg
                  className="text-slate-400 group-hover:text-white transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-slate-300 group-hover:text-white font-semibold text-sm transition-colors">
                  @{GITHUB_USERNAME}
                </span>
                <svg
                  className="text-slate-500 group-hover:text-blue-400 transition-colors"
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
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              {/* Aggregated stats pills */}
              <div className="flex items-center gap-3">
                <StatPill icon="star" value={totalStars} label="stars" />
                <StatPill icon="fork" value={totalForks} label="forks" />
                <StatPill icon="repo" value={repos.length} label="repos" />
              </div>
            </motion.div>

            {/* Charts row */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Language donut */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg>
                  Language Distribution
                </h3>
                <LanguageDonut stats={languageStats} />
              </div>

              {/* Stars bar chart */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Star Count by Repo
                </h3>
                {starredRepos.length > 0 ? (
                  <StarsBarChart repos={starredRepos} />
                ) : (
                  <div className="flex items-center justify-center h-40 text-slate-500 text-sm">
                    No starred repos yet
                  </div>
                )}
              </div>
            </motion.div>

            {/* Featured repos heading */}
            {starredRepos.length > 0 && (
              <motion.div variants={fadeUp} className="mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Featured Repositories
                  <span className="text-sm font-normal text-slate-500 ml-1">({starredRepos.length} with stars)</span>
                </h3>
              </motion.div>
            )}

            {/* Repo cards grid — only repos with stars */}
            {starredRepos.length > 0 && (
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {starredRepos.map((repo) => (
                  <motion.div key={repo.id} variants={fadeUp}>
                    <GitHubRepoCard repo={repo} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* View all on GitHub link */}
            <motion.div variants={fadeUp} className="text-center mt-10">
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-slate-400 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all duration-300"
              >
                View all repositories on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-8">
            {/* Charts skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 animate-pulse">
                <div className="h-4 bg-white/10 rounded w-1/3 mb-6" />
                <div className="flex items-center justify-center">
                  <div className="w-[180px] h-[180px] rounded-full border-[28px] border-white/5" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 animate-pulse">
                <div className="h-4 bg-white/10 rounded w-1/3 mb-6" />
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-3 bg-white/10 rounded w-24" />
                      <div className="h-5 bg-white/10 rounded flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Cards skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 animate-pulse">
                  <div className="h-4 bg-white/10 rounded w-3/4 mb-3" />
                  <div className="h-3 bg-white/10 rounded w-full mb-2" />
                  <div className="h-3 bg-white/10 rounded w-2/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-4 bg-white/10 rounded-full w-16" />
                    <div className="h-4 bg-white/10 rounded-full w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Stat Pill sub-component ─── */

function StatPill({ icon, value, label }: { icon: 'star' | 'fork' | 'repo'; value: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs">
      {icon === 'star' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )}
      {icon === 'fork' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><line x1="18" y1="9" x2="15" y2="15" /><line x1="6" y1="9" x2="9" y2="15" />
        </svg>
      )}
      {icon === 'repo' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )}
      <span className="font-bold text-white">{value}</span>
      <span className="text-slate-400">{label}</span>
    </div>
  )
}
