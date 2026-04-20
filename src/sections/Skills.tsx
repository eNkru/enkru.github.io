import { motion } from 'framer-motion'
import { Server, Monitor, Brain, Wrench } from 'lucide-react'
import { skills } from '../data/skills'

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Backend & Integration': Server,
  'Frontend': Monitor,
  'Artificial Intelligence': Brain,
  'Other Skills': Wrench,
}

const CATEGORY_ACCENTS: Record<string, string> = {
  'Backend & Integration': 'from-emerald-400/20 to-emerald-400/5 border-emerald-400/15',
  'Frontend': 'from-sky-400/20 to-sky-400/5 border-sky-400/15',
  'Artificial Intelligence': 'from-violet-400/20 to-violet-400/5 border-violet-400/15',
  'Other Skills': 'from-amber-400/20 to-amber-400/5 border-amber-400/15',
}

const CATEGORY_TAG_COLORS: Record<string, string> = {
  'Backend & Integration': 'bg-emerald-500/10 text-emerald-300/80 border-emerald-500/20',
  'Frontend': 'bg-sky-500/10 text-sky-300/80 border-sky-500/20',
  'Artificial Intelligence': 'bg-violet-500/10 text-violet-300/80 border-violet-500/20',
  'Other Skills': 'bg-amber-500/10 text-amber-300/80 border-amber-500/20',
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((cat, index) => {
            const Icon = CATEGORY_ICONS[cat.category] ?? Wrench
            const accent = CATEGORY_ACCENTS[cat.category] ?? 'from-white/20 to-white/5 border-white/15'
            const tagColor = CATEGORY_TAG_COLORS[cat.category] ?? 'bg-white/5 text-slate-300 border-white/10'
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className={`flex items-center gap-2.5 pb-3 border-b bg-gradient-to-r ${accent} rounded-t-lg px-3 py-2.5 -mx-1`}>
                  <Icon size={18} className="text-white/70" />
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg text-xs sm:text-sm font-medium border hover:scale-105 transition-all cursor-default ${tagColor}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
