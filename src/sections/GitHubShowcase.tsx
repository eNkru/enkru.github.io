import { motion } from 'framer-motion'
import { Star, GitFork, FolderGit2, ExternalLink } from 'lucide-react'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import { GitHubRepoCard } from '../components/GitHubRepoCard'
import { LanguageDonut } from '../components/LanguageDonut'
import { StarsBarChart } from '../components/StarsBarChart'
import { GITHUB_USERNAME } from '../data/github'
import { CyberSectionHeading } from '../components/cyber'

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
    <div className="cyber-section w-screen min-h-screen lg:h-screen overflow-y-auto scrollbar-hidden flex items-start justify-center px-6 py-16 pb-24 relative">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <CyberSectionHeading
            title="Open Source"
            subtitle="// github feed"
            accent="cyan"
          />
        </motion.div>

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
                className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border transition-all duration-200 hover:border-accent hover:shadow-[var(--shadow-neon-sm)] group"
                style={{ clipPath: 'var(--clip-chamfer-sm)' }}
              >
                <svg
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-mono text-foreground font-semibold text-sm transition-colors group-hover:text-accent">
                  @{GITHUB_USERNAME}
                </span>
                <ExternalLink size={12} strokeWidth={1.5} className="text-muted-foreground group-hover:text-accent-tertiary transition-colors" />
              </a>

              {/* Aggregated stats pills */}
              <div className="flex items-center gap-2">
                <StatPill icon="star" value={totalStars} label="stars" />
                <StatPill icon="fork" value={totalForks} label="forks" />
                <StatPill icon="repo" value={repos.length} label="repos" />
              </div>
            </motion.div>

            {/* Charts row */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {/* Language donut */}
              <div className="cyber-card p-6 hover:transform-none hover:shadow-none">
                <h3 className="cyber-label text-foreground mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg>
                  Language Distribution
                </h3>
                <LanguageDonut stats={languageStats} />
              </div>

              {/* Stars bar chart */}
              <div className="cyber-card p-6 hover:transform-none hover:shadow-none">
                <h3 className="cyber-label text-foreground mb-4 flex items-center gap-2">
                  <Star size={12} strokeWidth={1.5} />
                  Star Count by Repo
                </h3>
                {starredRepos.length > 0 ? (
                  <StarsBarChart repos={starredRepos.slice(0, 4)} />
                ) : (
                  <div className="flex items-center justify-center h-40 text-muted-foreground text-sm font-mono">
                    No starred repos yet
                  </div>
                )}
              </div>
            </motion.div>

            {/* Featured repos heading */}
            {starredRepos.length > 0 && (
              <motion.div variants={fadeUp} className="mb-4">
                <h3 className="font-mono text-foreground font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Star size={14} strokeWidth={1.5} className="text-accent" />
                  Featured Repositories
                  <span className="cyber-label text-muted-foreground ml-1">(top {Math.min(4, starredRepos.length)} of {starredRepos.length})</span>
                </h3>
              </motion.div>
            )}

            {/* Repo cards grid — only repos with stars */}
            {starredRepos.length > 0 && (
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {starredRepos.slice(0, 4).map((repo) => (
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
                className="cyber-button inline-flex items-center gap-2"
              >
                View all repositories
                <ExternalLink size={14} strokeWidth={1.5} />
              </a>
            </motion.div>
          </motion.div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-8">
            {/* Charts skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="cyber-card p-6 animate-pulse hover:transform-none hover:shadow-none">
                <div className="h-3 bg-muted rounded w-1/3 mb-6" />
                <div className="flex items-center justify-center">
                  <div className="w-[180px] h-[180px] rounded-full border-[28px] border-muted" />
                </div>
              </div>
              <div className="cyber-card p-6 animate-pulse hover:transform-none hover:shadow-none">
                <div className="h-3 bg-muted rounded w-1/3 mb-6" />
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-3 bg-muted rounded w-24" />
                      <div className="h-5 bg-muted rounded flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Cards skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="cyber-card p-5 animate-pulse hover:transform-none hover:shadow-none">
                  <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-3 bg-muted rounded w-full mb-2" />
                  <div className="h-3 bg-muted rounded w-2/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-4 bg-muted w-16" style={{ clipPath: 'var(--clip-chamfer-sm)' }} />
                    <div className="h-4 bg-muted w-16" style={{ clipPath: 'var(--clip-chamfer-sm)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll-more hint */}
      <div className="sticky bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none -mt-12 z-10" />
    </div>
  )
}

/* ─── Stat Pill sub-component ─── */

function StatPill({ icon, value, label }: { icon: 'star' | 'fork' | 'repo'; value: number; label: string }) {
  const IconComponent = icon === 'star' ? Star : icon === 'fork' ? GitFork : FolderGit2
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border font-mono text-xs"
      style={{ clipPath: 'var(--clip-chamfer-sm)' }}
    >
      <IconComponent size={11} strokeWidth={1.5} className="text-muted-foreground" />
      <span className="font-bold text-foreground">{value}</span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  )
}
