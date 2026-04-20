import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/experience'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

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
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-16 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mb-14 origin-center"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/40 via-purple-400/40 to-pink-400/40" />

          <div className="space-y-8">
            {experience.map((entry, index) => {
              const isExpanded = expandedId === entry.id
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 top-3 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-indigo-400/60 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                  </div>

                  {/* Card with cover image + content */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                    className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 overflow-hidden group"
                  >
                    {/* Cover image */}
                    <div className="relative h-24 sm:h-28 overflow-hidden">
                      <img
                        src={entry.cover}
                        alt={`${entry.title} cover`}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                      {/* Logo overlay on cover */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-3">
                        <img
                          src={entry.logo}
                          alt={`${entry.title} logo`}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-white/10 border border-white/10 p-1"
                        />
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{entry.title}</h3>
                          <p className="text-indigo-300 text-xs sm:text-sm font-semibold">{entry.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-slate-500 text-xs font-mono">{entry.period}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mt-2">{entry.description}</p>

                      {/* Tech tags */}
                      <AnimatePresence>
                        {isExpanded && entry.tags.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                              {entry.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 bg-indigo-500/10 text-indigo-300/80 rounded-full text-[10px] font-medium border border-indigo-500/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand hint */}
                      <div className="flex items-center gap-1 mt-3 text-slate-500 text-[10px] uppercase tracking-wider">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                        {isExpanded ? 'Hide tech stack' : 'Show tech stack'}
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
