import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <div className="w-screen min-h-screen lg:h-screen overflow-y-auto scrollbar-hidden scroll-fade-y flex items-start justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center mb-3"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mx-auto mb-14"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/40 via-indigo-400/40 to-purple-400/40" />

          <div className="space-y-10">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 top-2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-blue-400/60 z-10" />

                {/* Logo + content */}
                <div className="flex items-start gap-4">
                  <img
                    src={entry.logo}
                    alt={`${entry.title} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain bg-white/5 border border-white/10 p-1.5 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{entry.title}</h3>
                    <p className="text-blue-400 text-sm font-semibold mt-0.5">{entry.role}</p>
                    <p className="text-slate-500 text-xs font-mono mt-0.5">{entry.period}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2">{entry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
