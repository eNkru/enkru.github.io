import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { SocialLinks } from '../components/SocialLinks'

export interface IntroProps {
  onViewWork?: () => void
  onContact?: () => void
}

const HERO_STATS = [
  { value: '20', label: 'Years building software' },
  { value: '8', label: 'Organisations' },
  { value: '6', label: 'Sectors' },
  { value: 'NZ', label: 'Auckland based' },
]

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function Intro({ onViewWork, onContact }: IntroProps) {
  return (
    <div className="v-section v-section-hero w-full">
      <div className="v-page">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-16">
          {/* ── Copy ── */}
          <div className="order-1">
            <motion.p
              initial="hidden"
              animate="show"
              variants={rise}
              transition={{ duration: 0.5 }}
              className="v-kicker"
            >
              Senior Full-Stack &amp; Integration Consultant
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={rise}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="v-title mt-4 text-[clamp(40px,6.2vw,76px)] leading-[1.02]"
            >
              Howard Ju
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={rise}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="v-lede mt-5 max-w-xl text-[clamp(16px,1.4vw,19px)]"
            >
              I design and build enterprise web, integration and cloud platforms — and
              increasingly, the AI-assisted workflows that help teams ship them faster.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={rise}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {onViewWork && (
                <button type="button" onClick={onViewWork} className="v-btn v-btn-primary">
                  View selected work
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </button>
              )}
              {onContact && (
                <button type="button" onClick={onContact} className="v-btn v-btn-ghost">
                  Get in touch
                </button>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={rise}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <span className="v-meta flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-tertiary)]"
                />
                Auckland, New Zealand
              </span>
              <span className="v-meta hidden sm:inline opacity-40">·</span>
              <SocialLinks className="flex items-center gap-1.5" compact />
            </motion.div>
          </div>

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2"
          >
            <div className="relative mx-auto max-w-[360px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 border border-border/70"
                style={{ borderRadius: 'calc(var(--radius-card) + 8px)' }}
              />
              <img
                src="/img/aboutme2.jpg"
                alt="Howard Ju"
                loading="eager"
                fetchPriority="high"
                width={640}
                height={640}
                className="relative aspect-square w-full object-cover"
                style={{ borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-neon-lg)' }}
              />
              <div
                className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 px-3 py-2 backdrop-blur-md"
                style={{
                  borderRadius: 'var(--radius-btn)',
                  background: 'var(--paper-glass)',
                  boxShadow: 'inset 0 0 0 1px var(--color-border)',
                }}
              >
                <span className="font-mono text-[11px] tracking-[0.06em] text-foreground">
                  howard-ju.profile
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">BSc CS</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Dark band: at a glance ── */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4"
          style={{ background: 'var(--color-border)', borderRadius: 'var(--radius-card)' }}
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-6"
              style={{ background: 'var(--paper-band)', color: 'var(--paper-band-ink)' }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="m-0">
                <span className="block text-[clamp(24px,2.6vw,32px)] font-semibold leading-none tracking-[-0.03em]">
                  {stat.value}
                </span>
                <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>

        <div className="mt-10 flex justify-center">
          <span className="v-meta flex items-center gap-2 opacity-70">
            <ArrowDown size={13} strokeWidth={1.5} aria-hidden="true" />
            Scroll to read more
          </span>
        </div>
      </div>
    </div>
  )
}
