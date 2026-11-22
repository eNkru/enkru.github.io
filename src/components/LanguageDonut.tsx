import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type LanguageStat } from '../utils/github-languages'

interface LanguageDonutProps {
  stats: LanguageStat[]
}

export function LanguageDonut({ stats }: LanguageDonutProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const total = stats.reduce((s, l) => s + l.count, 0)

  const size = 180
  const strokeWidth = 24
  const radius = (size - strokeWidth) / 2
  const center = size / 2

  let cumulativeAngle = 0
  const arcs = stats.map((stat, i) => {
    const fraction = stat.count / total
    const angle = fraction * 360
    const startAngle = cumulativeAngle
    const endAngle = cumulativeAngle + angle
    cumulativeAngle = endAngle

    const startRad = ((startAngle - 90) * Math.PI) / 180
    const endRad = ((endAngle - 90) * Math.PI) / 180

    const x1 = center + radius * Math.cos(startRad)
    const y1 = center + radius * Math.sin(startRad)
    const x2 = center + radius * Math.cos(endRad)
    const y2 = center + radius * Math.sin(endRad)

    const largeArc = angle > 180 ? 1 : 0
    const isSmall = angle < 3

    const d = isSmall ? '' : `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`

    return { ...stat, d, index: i, isSmall }
  })

  const hoveredStat = hoveredIndex !== null ? stats[hoveredIndex] : null

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="var(--color-muted)"
            strokeWidth={strokeWidth}
          />
          {arcs.map((arc) =>
            arc.isSmall ? null : (
              <motion.path
                key={arc.language}
                d={arc.d}
                fill="none"
                stroke={arc.color}
                strokeWidth={hoveredIndex === arc.index ? strokeWidth + 5 : strokeWidth}
                strokeLinecap="butt"
                className="cursor-pointer transition-all duration-200"
                style={{
                  opacity: hoveredIndex !== null && hoveredIndex !== arc.index ? 0.3 : 1,
                }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: arc.index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(arc.index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ),
          )}
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredStat ? (
              <motion.div
                key={hoveredStat.language}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.14 }}
                className="text-center"
              >
                <span className="text-[15px] font-semibold text-foreground">
                  {hoveredStat.language}
                </span>
                <div className="v-meta mt-0.5 text-[11px] tabular-nums">
                  {hoveredStat.count} repo{hoveredStat.count !== 1 ? 's' : ''} ·{' '}
                  {Math.round((hoveredStat.count / total) * 100)}%
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="total"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-foreground tabular-nums">
                  {total}
                </div>
                <div className="v-meta mt-1 text-[11px]">repos</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5">
        {stats.map((stat, i) => (
          <li key={stat.language}>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1.5 text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(i)}
              onBlur={() => setHoveredIndex(null)}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: stat.color }}
              />
              {stat.language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
