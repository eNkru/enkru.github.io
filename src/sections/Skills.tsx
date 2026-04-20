import { motion } from 'framer-motion'
import { Server, Monitor, Brain, Wrench, Sparkles } from 'lucide-react'
import { skills } from '../data/skills'

/* ─── Category visual config ─── */

const CATEGORY_CONFIG: Record<string, {
  icon: React.ElementType
  gradient: string
  glow: string
  tagBg: string
  tagText: string
  tagBorder: string
  tagHover: string
  meshFrom: string
  meshVia: string
  meshTo: string
}> = {
  'Backend & Integration': {
    icon: Server,
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/20',
    tagBg: 'bg-emerald-500/15',
    tagText: 'text-emerald-200',
    tagBorder: 'border-emerald-500/20',
    tagHover: 'hover:bg-emerald-500/25 hover:border-emerald-400/40 hover:text-emerald-100',
    meshFrom: 'from-emerald-600/10',
    meshVia: 'via-teal-600/5',
    meshTo: 'to-cyan-600/10',
  },
  'Frontend': {
    icon: Monitor,
    gradient: 'from-sky-400 to-blue-500',
    glow: 'shadow-sky-500/20',
    tagBg: 'bg-sky-500/15',
    tagText: 'text-sky-200',
    tagBorder: 'border-sky-500/20',
    tagHover: 'hover:bg-sky-500/25 hover:border-sky-400/40 hover:text-sky-100',
    meshFrom: 'from-sky-600/10',
    meshVia: 'via-blue-600/5',
    meshTo: 'to-indigo-600/10',
  },
  'Artificial Intelligence': {
    icon: Brain,
    gradient: 'from-violet-400 to-purple-500',
    glow: 'shadow-violet-500/20',
    tagBg: 'bg-violet-500/15',
    tagText: 'text-violet-200',
    tagBorder: 'border-violet-500/20',
    tagHover: 'hover:bg-violet-500/25 hover:border-violet-400/40 hover:text-violet-100',
    meshFrom: 'from-violet-600/10',
    meshVia: 'via-purple-600/5',
    meshTo: 'to-fuchsia-600/10',
  },
  'Other Skills': {
    icon: Wrench,
    gradient: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/20',
    tagBg: 'bg-amber-500/15',
    tagText: 'text-amber-200',
    tagBorder: 'border-amber-500/20',
    tagHover: 'hover:bg-amber-500/25 hover:border-amber-400/40 hover:text-amber-100',
    meshFrom: 'from-amber-600/10',
    meshVia: 'via-orange-600/5',
    meshTo: 'to-rose-600/10',
  },
}

const DEFAULT_CONFIG = CATEGORY_CONFIG['Other Skills']!

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const tagVariant = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 20 } },
}

/* ─── Skill Card component ─── */

function SkillCard({ cat }: { cat: typeof skills[number] }) {
  const cfg = CATEGORY_CONFIG[cat.category] ?? DEFAULT_CONFIG
  const Icon = cfg.icon

  return (
    <motion.div
      variants={cardVariant}
      className={`group relative rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:shadow-2xl ${cfg.glow} hover:-translate-y-1`}
    >
      {/* Mesh gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cfg.meshFrom} ${cfg.meshVia} ${cfg.meshTo} opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${cfg.gradient} opacity-[0.07] blur-2xl group-hover:opacity-[0.12] transition-opacity duration-700`} />
        <div className={`absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr ${cfg.gradient} opacity-[0.05] blur-3xl group-hover:opacity-[0.1] transition-opacity duration-700`} />
      </div>

      {/* Dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative p-6 sm:p-8">
        {/* Header: icon + title + count */}
        <div className="flex items-center gap-4 mb-6">
          {/* Icon with animated glow ring */}
          <div className="relative">
            <div className={`absolute inset-[-4px] rounded-2xl bg-gradient-to-br ${cfg.gradient} opacity-20 blur-md group-hover:opacity-40 group-hover:blur-lg transition-all duration-500`} />
            <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shadow-lg`}>
              <Icon size={22} className="text-white drop-shadow-sm" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
              {cat.category}
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">
              {cat.items.length} skill{cat.items.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Skill count badge */}
          <div className={`px-2.5 py-1 rounded-full text-xs font-bold border border-white/[0.06]`}>
            <span className={`bg-gradient-to-r ${cfg.gradient} bg-clip-text text-transparent`}>
              {cat.items.length}
            </span>
          </div>
        </div>

        {/* Accent line */}
        <div className={`h-px bg-gradient-to-r ${cfg.gradient} opacity-30 mb-5`} />

        {/* Skill tags with staggered animation */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-wrap gap-2"
        >
          {cat.items.map((item) => (
            <motion.span
              key={item}
              variants={tagVariant}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium border ${cfg.tagBg} ${cfg.tagText} ${cfg.tagBorder} ${cfg.tagHover} transition-all duration-200 cursor-default select-none`}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ─── Main Skills section ─── */

export function Skills() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base mt-2 font-light"
          >
            Technologies &amp; tools I work with
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-24 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 mx-auto mb-14 origin-center"
        />

        {/* Bento grid: 2×2 on lg, 2-col on md, 1-col on mobile */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Backend card spans full width on lg for emphasis */}
          <motion.div variants={cardVariant} className="lg:col-span-1">
            <SkillCard cat={skills[0]} />
          </motion.div>

          {/* Frontend */}
          <motion.div variants={cardVariant}>
            <SkillCard cat={skills[1]} />
          </motion.div>

          {/* AI card spans full width on lg — highlight the AI specialty */}
          <motion.div variants={cardVariant} className="lg:col-span-1">
            <SkillCard cat={skills[2]} />
          </motion.div>

          {/* Other skills */}
          <motion.div variants={cardVariant}>
            <SkillCard cat={skills[3]} />
          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-12 text-slate-600 text-xs"
        >
          <Sparkles size={12} />
          <span className="tracking-wider uppercase font-medium">Always exploring new technologies</span>
          <Sparkles size={12} />
        </motion.div>
      </div>
    </div>
  )
}
