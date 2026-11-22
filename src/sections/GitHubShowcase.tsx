import { motion } from 'framer-motion'
import { Star, GitFork, FolderGit2, ArrowUpRight, Github } from 'lucide-react'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import { GitHubRepoCard } from '../components/GitHubRepoCard'
import { LanguageDonut } from '../components/LanguageDonut'
import { StarsBarChart } from '../components/StarsBarChart'
import { GITHUB_USERNAME } from '../data/github'
import { PaperSectionHeading } from '../components/PaperSectionHeading'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function GitHubShowcase() {
  const { starredRepos, featuredRepos, languageStats, loading, totalStars, totalForks, repos } = useGitHubRepos()

  return (
    <div className="v-section w-full">
      <div className="v-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <PaperSectionHeading
            index="04"
            kicker="Open source"
            title="Code I've published, pulled live from GitHub."
            lede="Public repositories, language mix and star counts, fetched from the GitHub API and cached for five minutes."
            className="max-w-2xl"
          />
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="v-btn v-btn-ghost v-btn-sm shrink-0"
          >
            <Github size={14} strokeWidth={1.75} aria-hidden="true" />
            @{GITHUB_USERNAME}
            <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </motion.div>

        {loading && (
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="v-cell h-64 animate-pulse p-6">
                <div className="h-3 w-1/3 rounded bg-muted" />
                <div
                  className="mt-6 h-40 bg-muted"
                  style={{ borderRadius: 'var(--radius-btn)' }}
                />
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {/* ── Aggregate stats ── */}
            <motion.dl
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-px overflow-hidden"
              style={{ background: 'var(--color-border)', borderRadius: 'var(--radius-card)' }}
            >
              {[
                { icon: Star, value: totalStars, label: 'Stars earned' },
                { icon: GitFork, value: totalForks, label: 'Forks' },
                { icon: FolderGit2, value: repos.length, label: 'Public repos' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-card px-5 py-5">
                  <dt className="v-meta flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em]">
                    <Icon size={12} strokeWidth={1.6} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="m-0 mt-2 text-[clamp(22px,2.4vw,28px)] font-semibold leading-none tracking-[-0.03em] text-foreground tabular-nums">
                    {value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* ── Charts ── */}
            <motion.div variants={fadeUp} className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="v-cell p-6">
                <h3 className="v-meta mb-5 text-[10.5px] uppercase tracking-[0.14em]">
                  Language distribution
                </h3>
                <LanguageDonut stats={languageStats} />
              </div>

              <div className="v-cell p-6">
                <h3 className="v-meta mb-5 text-[10.5px] uppercase tracking-[0.14em]">
                  Stars by repository
                </h3>
                {starredRepos.length > 0 ? (
                  <StarsBarChart repos={starredRepos.slice(0, 4)} />
                ) : (
                  <p className="v-lede flex h-40 items-center justify-center text-[13px]">
                    No starred repositories yet.
                  </p>
                )}
              </div>
            </motion.div>

            {/* ── Featured repos ── */}
            {featuredRepos.length > 0 && (
              <>
                <motion.h3
                  variants={fadeUp}
                  className="mt-12 flex items-baseline gap-2 text-[15px] font-semibold tracking-[-0.015em] text-foreground"
                >
                  Featured repositories
                  <span className="v-meta text-[11px] font-normal">
                    {featuredRepos.length} of {repos.length}
                  </span>
                </motion.h3>

                <motion.div variants={stagger} className="mt-4 grid gap-4 sm:grid-cols-2">
                  {featuredRepos.map((repo) => (
                    <motion.div key={repo.id} variants={fadeUp}>
                      <GitHubRepoCard repo={repo} />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="v-btn v-btn-ghost"
              >
                View all repositories
                <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
