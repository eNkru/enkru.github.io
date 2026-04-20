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
      className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50"
      aria-label="Section navigation"
    >
      {labels.map((label, i) => (
        <div
          key={label}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip label */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-6 whitespace-nowrap text-xs font-medium text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-2.5 py-1 pointer-events-none"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>

          <button
            onClick={() => onChange(i)}
            aria-label={`Go to ${label}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-3 h-3 shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                : 'bg-white/40 w-2 h-2 self-center hover:bg-white/60 hover:w-2.5 hover:h-2.5'
            }`
            }
          />
        </div>
      ))}
    </nav>
  )
}
