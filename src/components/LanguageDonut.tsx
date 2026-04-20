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
  const strokeWidth = 28
  const radius = (size - strokeWidth) / 2
  const center = size / 2

  let cumulativeAngle = 0
  const arcs = stats.map((stat, i) => {
    const fraction = stat.count / total
    const angle = fraction * 360
    const startAngle = cumulativeAngle
    const endAngle = cumulativeAngle + angle
    cumulativeAngle = endAngle

    // SVG arc: convert to start/end points
    const startRad = ((startAngle - 90) * Math.PI) / 180
    const endRad = ((endAngle - 90) * Math.PI) / 180

    const x1 = center + radius * Math.cos(startRad)
    const y1 = center + radius * Math.sin(startRad)
    const x2 = center + radius * Math.cos(endRad)
    const y2 = center + radius * Math.sin(endRad)

    const largeArc = angle > 180 ? 1 : 0
    const isSmall = angle < 3 // skip tiny arcs

    const d = isSmall
      ? ''
      : `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`

    return {
      ...stat,
      d,
      index: i,
      isSmall,
    }
  })

  const hoveredStat = hoveredIndex !== null ? stats[hoveredIndex] : null

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          {/* Colored segments */}
          {arcs.map((arc) =>
            arc.isSmall ? null : (
              <motion.path
                key={arc.language}
                d={arc.d}
                fill="none"
                stroke={arc.color}
                strokeWidth={hoveredIndex === arc.index ? strokeWidth + 6 : strokeWidth}
                strokeLinecap="butt"
                className="transition-all duration-200 cursor-pointer"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== arc.index ? 'opacity(0.35)' : 'none',
                }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: arc.index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(arc.index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            )
          )}
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredStat ? (
              <motion.div
                key={hoveredStat.language}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full mr-1.5"
                  style={{ backgroundColor: hoveredStat.color }}
                />
                <span className="text-white font-bold text-sm">{hoveredStat.language}</span>
                <div className="text-slate-400 text-xs mt-0.5">
                  {hoveredStat.count} repo{hoveredStat.count !== 1 ? 's' : ''} · {Math.round((hoveredStat.count / total) * 100)}%
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="total"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-white font-bold text-2xl">{total}</div>
                <div className="text-slate-500 text-xs">repos</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs">
        {stats.map((stat, i) => (
          <button
            key={stat.language}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: stat.color }}
            />
            {stat.language}
          </button>
        ))}
      </div>
    </div>
  )
}
