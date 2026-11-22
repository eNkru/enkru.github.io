import { motion } from 'framer-motion'
import { Server, Zap, Archive, ArrowUpRight } from 'lucide-react'
import { skills } from '../data/skills'
import { PaperSectionHeading } from '../components/PaperSectionHeading'

const CATEGORY_CONFIG: Record<string, {
  icon: React.ElementType
  tag: string
  note: string
}> = {
  'Core Strengths': {
    icon: Server,
    tag: 'Core',
    note: 'The work I am hired for most often — full-stack delivery with an integration backbone.',
  },
  'Current Stack': {
    icon: Zap,
    tag: 'Active',
    note: 'Tools I reach for on current engagements, including AI-assisted development.',
  },
  'Legacy Experience': {
    icon: Archive,
    tag: 'Archive',
    note: 'Still maintained where it runs in production; useful for migrations and upgrades.',
  },
}

const DEFAULT_CONFIG = {
  icon: Archive,
  tag: 'Other',
  note: 'Additional tools from earlier engagements.',
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function SkillCard({ cat }: { cat: typeof skills[number] }) {
  const cfg = CATEGORY_CONFIG[cat.category] ?? DEFAULT_CONFIG
  const Icon = cfg.icon

  return (
    <article className="v-cell v-cell-hover group flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="grid h-9 w-9 place-items-center bg-muted text-foreground"
          style={{ borderRadius: 'calc(var(--radius-btn) * 0.85)' }}
        >
          <Icon size={16} strokeWidth={1.6} />
        </span>
        <span className="v-meta text-[10.5px] uppercase tracking-[0.14em]">{cfg.tag}</span>
      </div>

      <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.015em] text-foreground">
        {cat.category}
      </h3>
      <p className="v-lede mt-2 text-[13.5px] leading-relaxed">{cfg.note}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {cat.items.map((item) => (
          <li key={item} className="v-pill">
            {item}
          </li>
        ))}
      </ul>

      <p className="v-meta mt-auto pt-5 text-[11px] tabular-nums">
        {cat.items.length} entries
      </p>
    </article>
  )
}

export function Skills() {
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
            index="02"
            kicker="Skills"
            title="Three stacks, one delivery habit."
            lede="Grouped by how often I use them rather than by logo count. Every entry here has shipped to production."
            className="max-w-2xl"
          />
          <a
            href="https://github.com/enkru"
            target="_blank"
            rel="noopener noreferrer"
            className="v-btn v-btn-ghost v-btn-sm shrink-0"
          >
            See it on GitHub
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((cat) => (
            <motion.div key={cat.category} variants={fadeUp} className="h-full">
              <SkillCard cat={cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
