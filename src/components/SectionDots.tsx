import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface SectionDotsProps {
  current: number
  onChange: (i: number) => void
  labels: string[]
}

export function SectionDots({ current, onChange, labels }: SectionDotsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50"
      aria-label="Section navigation"
    >
      {labels.map((label, i) => (
        <div
          key={label}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* HUD tooltip label */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.12 }}
                className="absolute right-8 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-accent bg-background/90 border border-accent/40 px-3 py-1.5 pointer-events-none shadow-[var(--shadow-neon-sm)]"
                style={{ clipPath: 'var(--clip-chamfer-sm)' }}
              >
                <span className="text-muted-foreground mr-1.5">{String(i).padStart(2, '0')}</span>
                {label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* HUD marker */}
          <button
            onClick={() => onChange(i)}
            aria-label={`Go to ${label}`}
            className={`cursor-pointer transition-all duration-200 ${
              i === current
                ? 'w-3 h-3 bg-accent border border-accent shadow-[var(--shadow-neon)] rotate-45'
                : 'w-2 h-2 bg-border border border-border hover:border-accent/60 hover:bg-accent/20 hover:shadow-[var(--shadow-neon-sm)]'
            }`}
            style={{ clipPath: 'var(--clip-chamfer-sm)' }}
          />
        </div>
      ))}
    </nav>
  )
}
