import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/experience'
import { PaperSectionHeading } from '../components/PaperSectionHeading'
import { ChevronDown } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
}

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="v-section w-full">
      <div className="v-page">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <PaperSectionHeading
            index="05"
            kicker="Experience"
            title="Where I've worked, and what I was responsible for."
            lede="Twenty years across consulting and product teams. Expand an entry for the stack behind it."
          />
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-16">
          {/* ── Rail: period + org ── */}
          <div className="hidden lg:block">
            <ol className="sticky top-24 space-y-0">
              {experience.map((entry, index) => (
                <motion.li
                  key={entry.id}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="relative border-t border-border py-3 pl-4 first:border-t-0 first:pt-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[1.15rem] h-1 w-1.5 rounded-full ${
                      expandedId === entry.id ? 'bg-[var(--color-accent)]' : 'bg-border'
                    }`}
                  />
                  <p className="v-meta text-[10.5px] uppercase tracking-[0.12em]">{entry.period}</p>
                  <p className="mt-0.5 text-[13.5px] font-medium text-foreground">{entry.title}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* ── Timeline cards ── */}
          <ol className="space-y-3">
            {experience.map((entry, index) => {
              const isExpanded = expandedId === entry.id
              return (
                <motion.li
                  key={entry.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
                >
                  <article className="v-cell v-cell-hover overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`experience-details-${entry.id}`}
                      className="w-full cursor-pointer p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={entry.logo}
                          alt=""
                          loading="lazy"
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 bg-muted object-contain p-1.5"
                          style={{ borderRadius: 'calc(var(--radius-btn) * 0.85)' }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                            <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-foreground">
                              {entry.title}
                            </h3>
                            <span className="v-meta text-[11px] uppercase tracking-[0.1em]">
                              {entry.period}
                            </span>
                          </div>
                          <p className="mt-0.5 text-[13.5px] text-muted-foreground">{entry.role}</p>
                          <p className="mt-2.5 text-[14px] leading-relaxed text-foreground/85">
                            {entry.description}
                          </p>
                        </div>
                        <ChevronDown
                          size={16}
                          strokeWidth={1.75}
                          aria-hidden="true"
                          className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`experience-details-${entry.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border px-5 py-4">
                            <p className="v-meta mb-2.5 text-[10.5px] uppercase tracking-[0.14em]">
                              Stack
                            </p>
                            <ul className="flex flex-wrap gap-1.5">
                              {entry.tags.map((tag) => (
                                <li key={tag} className="v-pill">
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
