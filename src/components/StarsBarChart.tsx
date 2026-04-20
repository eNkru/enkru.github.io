import { useState } from 'react'
import { motion } from 'framer-motion'
import { type GitHubRepo } from '../data/github'
import { getLangColor } from '../utils/github-languages'

interface StarsBarChartProps {
  repos: GitHubRepo[]
}

export function StarsBarChart({ repos }: StarsBarChartProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const maxStars = Math.max(...repos.map((r) => r.stargazers_count), 1)
  const barHeight = 24
  const gap = 6
  const labelWidth = 140
  const barMaxWidth = 260
  const chartHeight = repos.length * (barHeight + gap) - gap

  return (
    <div className="w-full overflow-hidden">
      <svg
        width="100%"
        viewBox={`0 0 ${labelWidth + barMaxWidth + 50} ${chartHeight}`}
        className="overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        {repos.map((repo, i) => {
          const barWidth = (repo.stargazers_count / maxStars) * barMaxWidth
          const y = i * (barHeight + gap)
          const isHovered = hoveredId === repo.id
          const langColor = getLangColor(repo.language)

          return (
            <g
              key={repo.id}
              onMouseEnter={() => setHoveredId(repo.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
              onClick={() => window.open(repo.html_url, '_blank', 'noopener,noreferrer')}
            >
              {/* Repo name label */}
              <text
                x={labelWidth - 8}
                y={y + barHeight / 2 + 4}
                textAnchor="end"
                fill={isHovered ? '#ffffff' : '#94a3b8'}
                fontSize="11"
                fontFamily="inherit"
                className="transition-all duration-200"
                style={{ fontWeight: isHovered ? 700 : 500 }}
              >
                {repo.name.length > 18 ? repo.name.slice(0, 17) + '…' : repo.name}
              </text>

              {/* Bar background */}
              <rect
                x={labelWidth}
                y={y + 2}
                width={barMaxWidth}
                height={barHeight - 4}
                rx={4}
                fill="rgba(255,255,255,0.03)"
              />

              {/* Colored bar */}
              <motion.rect
                x={labelWidth}
                y={y + 2}
                width={isHovered ? barWidth + 8 : barWidth}
                height={barHeight - 4}
                rx={4}
                fill={langColor}
                opacity={isHovered ? 0.9 : 0.55}
                initial={{ width: 0 }}
                animate={{ width: isHovered ? barWidth + 8 : barWidth }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              />

              {/* Star count */}
              <text
                x={labelWidth + barWidth + 12}
                y={y + barHeight / 2 + 4}
                fill={isHovered ? '#fbbf24' : '#64748b'}
                fontSize="11"
                fontFamily="inherit"
                fontWeight={isHovered ? 700 : 500}
                className="transition-all duration-200"
              >
                ★ {repo.stargazers_count}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
