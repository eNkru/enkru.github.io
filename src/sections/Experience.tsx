import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/experience'
import { CyberSectionHeading } from '../components/cyber'
import { ChevronDown } from 'lucide-react'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="cyber-section w-screen min-h-screen lg:h-screen overflow-y-auto scrollbar-hidden flex items-start justify-center px-6 py-16 pb-24 relative">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <CyberSectionHeading
            title="Experience"
            subtitle="// mission log"
            accent="magenta"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line — neon rail */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-secondary/60 via-accent-secondary/30 to-accent/20" />

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
                  {/* Timeline node */}
                  <div
                    className="absolute left-4 sm:left-6 top-3 w-5 h-5 bg-background border-2 border-accent-secondary/60 z-10 flex items-center justify-center rotate-45"
                    style={{ clipPath: 'var(--clip-chamfer-sm)' }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent-secondary" />
                  </div>

                  {/* Mission dossier card */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                    className="cyber-card w-full text-left overflow-hidden group p-0 hover:transform-none"
                  >
                    {/* Cover image — surveillance feed */}
                    <div className="relative h-24 sm:h-28 overflow-hidden border-b border-border">
                      {/* Scanlines over cover */}
                      <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]" />
                      <img
                        src={entry.cover}
                        alt={`${entry.title} cover`}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.02] transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                      {/* Logo overlay */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-3 z-20">
                        <img
                          src={entry.logo}
                          alt={`${entry.title} logo`}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-card border border-border p-1"
                          style={{ clipPath: 'var(--clip-chamfer-sm)' }}
                        />
                        <div>
                          <h3 className="font-mono text-foreground font-semibold text-sm sm:text-base leading-tight">{entry.title}</h3>
                          <p className="text-accent-secondary text-xs sm:text-sm font-mono font-medium">{entry.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="cyber-label text-muted-foreground">{entry.period}</p>
                      <p className="text-foreground/70 text-sm leading-relaxed mt-2">{entry.description}</p>

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
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                              {entry.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 bg-accent-secondary/10 text-accent-secondary/80 text-[10px] font-mono tracking-wider border border-accent-secondary/20"
                                  style={{ clipPath: 'var(--clip-chamfer-sm)' }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand hint */}
                      <div className="flex items-center gap-1 mt-3 text-muted-foreground font-mono text-[10px] uppercase tracking-wider">
                        <ChevronDown
                          size={10}
                          strokeWidth={1.5}
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                        {isExpanded ? 'Hide tech stack' : 'Show tech stack'}
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Scroll-more hint — fades out at bottom edge */}
        <div className="sticky bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none -mt-12 z-10" />
      </div>
    </div>
  )
}
