import { motion } from 'framer-motion'
import { Server, Zap, Archive } from 'lucide-react'
import { skills } from '../data/skills'
import { CyberSectionHeading } from '../components/cyber'

/* ─── Category visual config — Cyberpunk palette ─── */

const CATEGORY_CONFIG: Record<string, {
  icon: React.ElementType
  accent: string
  glow: string
  tagBg: string
  tagText: string
  tagBorder: string
}> = {
  'Core Strengths': {
    icon: Server,
    accent: 'text-accent',
    glow: 'from-accent/10 via-accent/5 to-accent/10',
    tagBg: 'bg-accent/10',
    tagText: 'text-accent/80',
    tagBorder: 'border-accent/20',
  },
  'Current Stack': {
    icon: Zap,
    accent: 'text-accent-secondary',
    glow: 'from-accent-secondary/10 via-accent-secondary/5 to-accent-secondary/10',
    tagBg: 'bg-accent-secondary/10',
    tagText: 'text-accent-secondary/80',
    tagBorder: 'border-accent-secondary/20',
  },
  'Legacy Experience': {
    icon: Archive,
    accent: 'text-muted-foreground',
    glow: 'from-muted/10 via-muted/5 to-muted/10',
    tagBg: 'bg-muted/40',
    tagText: 'text-muted-foreground',
    tagBorder: 'border-border',
  },
}

const DEFAULT_CONFIG = CATEGORY_CONFIG['Legacy Experience']!

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/* ─── Skill Card component ─── */

function SkillCard({ cat }: { cat: typeof skills[number] }) {
  const cfg = CATEGORY_CONFIG[cat.category] ?? DEFAULT_CONFIG
  const Icon = cfg.icon

  return (
    <div className="group cyber-card p-5 flex flex-col gap-4 relative overflow-hidden">
      {/* Gradient glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cfg.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      {/* Header: icon + title + count */}
      <div className="flex items-center gap-3 relative">
        <div
          data-theme-icon
          className="w-9 h-9 bg-muted border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-200"
          style={{ clipPath: 'var(--clip-chamfer-sm)' }}
        >
          <Icon size={16} strokeWidth={1.5} className={`${cfg.accent} transition-colors`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider leading-tight">
            {cat.category}
          </h3>
        </div>
        <span className="cyber-label text-muted-foreground tabular-nums">
          {cat.items.length}
        </span>
      </div>

      {/* Skill tags — clipped technical chips */}
      <div className="flex flex-wrap gap-1.5 relative">
        {cat.items.map((item) => (
          <span
            key={item}
            data-theme-pill
            className={`px-2 py-0.5 ${cfg.tagBg} ${cfg.tagText} text-[10px] sm:text-xs font-mono tracking-wider ${cfg.tagBorder} border`}
            style={{ clipPath: 'var(--clip-chamfer-sm)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Main Skills section ─── */

export function Skills() {
  return (
    <div className="cyber-section w-screen min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <CyberSectionHeading
            title="Skills"
            subtitle="Capabilities & Tools"
            accent="green"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((cat) => (
            <motion.div key={cat.category} variants={fadeUp}>
              <SkillCard cat={cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
