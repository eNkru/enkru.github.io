import { useState, useEffect, useCallback } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ShowcaseCardProps {
  title: string
  images: string[]
  url: string
  description?: string
  role?: string
  techStack?: string[]
  problem?: string
  impact?: string
  /** Renders a wider, feature-sized card (first item in the grid). */
  feature?: boolean
}

export function ShowcaseCard({
  title,
  images,
  url,
  description,
  role,
  techStack,
  problem,
  impact,
  feature = false,
}: ShowcaseCardProps) {
  const [current, setCurrent] = useState(0)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const hasDetails = Boolean(description || problem)
  const panelId = `showcase-details-${title.replace(/\s+/g, '-').toLowerCase()}`

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [images.length, next])

  return (
    <article className="v-cell v-cell-hover group flex h-full flex-col overflow-hidden">
      {/* ── Media ── */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        aria-label={`Visit ${title}`}
      >
        <div
          className={
            feature
              ? 'h-[clamp(240px,30vw,420px)] w-full'
              : 'aspect-[16/10] w-full'
          }
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt={`${title} screenshot ${current + 1}`}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                feature ? 'object-top' : ''
              }`}
            />
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/25 px-2 py-1 backdrop-blur-sm">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrent(i)
                }}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                className={`cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === current ? 'h-1.5 w-4 bg-white' : 'h-1.5 w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </a>

      {/* ── Body ── */}
      <div className={`flex flex-1 flex-col ${feature ? 'p-6 sm:p-7' : 'p-5'}`}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-semibold tracking-[-0.02em] text-foreground ${
              feature ? 'text-[clamp(19px,1.8vw,24px)]' : 'text-[16px]'
            }`}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {title}
            </a>
          </h3>
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
            className="mt-1 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          />
        </div>

        {role && <p className="v-meta mt-1.5">{role}</p>}

        {impact && (
          <p
            className={`mt-3 text-foreground/85 ${
              feature ? 'text-[14.5px] leading-relaxed' : 'text-[13px] leading-relaxed line-clamp-2'
            }`}
          >
            {impact}
          </p>
        )}

        {techStack && techStack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <li key={tech} className="v-pill">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {hasDetails && (
          <div className="mt-auto pt-4">
            <button
              type="button"
              onClick={() => setDetailsOpen((open) => !open)}
              aria-expanded={detailsOpen}
              aria-controls={panelId}
              className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ChevronDown
                size={13}
                strokeWidth={1.75}
                className={`transition-transform duration-200 ${detailsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
              {detailsOpen ? 'Hide details' : 'More details'}
            </button>

            <AnimatePresence initial={false}>
              {detailsOpen && (
                <motion.div
                  id={panelId}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2.5 pt-3">
                    {description && (
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    )}
                    {problem && (
                      <p className="border-l-2 border-border pl-3 text-[12.5px] leading-relaxed text-muted-foreground">
                        {problem}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </article>
  )
}
