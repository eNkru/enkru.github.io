import { motion } from 'framer-motion'
import { Server, Monitor, Brain, Wrench } from 'lucide-react'
import { skills } from '../data/skills'

/* ─── Category visual config ─── */

const CATEGORY_CONFIG: Record<string, {
  icon: React.ElementType
  gradient: string
  tagBg: string
  tagText: string
  tagBorder: string
}> = {
  'Backend & Integration': {
    icon: Server,
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-teal-500/10',
    tagBg: 'bg-emerald-500/10',
    tagText: 'text-emerald-300/80',
    tagBorder: 'border-emerald-500/20',
  },
  'Frontend': {
    icon: Monitor,
    gradient: 'from-sky-500/10 via-sky-500/5 to-blue-500/10',
    tagBg: 'bg-sky-500/10',
    tagText: 'text-sky-300/80',
    tagBorder: 'border-sky-500/20',
  },
  'Artificial Intelligence': {
    icon: Brain,
    gradient: 'from-violet-500/10 via-violet-500/5 to-purple-500/10',
    tagBg: 'bg-violet-500/10',
    tagText: 'text-violet-300/80',
    tagBorder: 'border-violet-500/20',
  },
  'Other Skills': {
    icon: Wrench,
    gradient: 'from-amber-500/10 via-amber-500/5 to-orange-500/10',
    tagBg: 'bg-amber-500/10',
    tagText: 'text-amber-300/80',
    tagBorder: 'border-amber-500/20',
  },
}

const DEFAULT_CONFIG = CATEGORY_CONFIG['Other Skills']!

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
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-4 relative overflow-hidden">
      {/* Subtle gradient glow on hover — matches GitHubRepoCard */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Header: icon + title + count */}
      <div className="flex items-center gap-3 relative">
        <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] group-hover:border-white/15 transition-colors duration-300">
          <Icon size={18} className="text-slate-400 group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
            {cat.category}
          </h3>
        </div>
        <span className="text-xs text-slate-500 tabular-nums">
          {cat.items.length}
        </span>
      </div>

      {/* Skill tags — matches topic pill style from GitHubRepoCard */}
      <div className="flex flex-wrap gap-1.5 relative">
        {cat.items.map((item) => (
          <span
            key={item}
            className={`px-2 py-0.5 ${cfg.tagBg} ${cfg.tagText} rounded-full text-[10px] sm:text-xs font-medium ${cfg.tagBorder} border`}
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
    <div className="w-screen min-h-screen flex items-center justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center mb-3"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-24 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 mx-auto mb-12 origin-center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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
