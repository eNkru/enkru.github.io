import { useState } from 'react'

export interface FlipCardProps {
  cover: string
  logo: string
  title: string
  role: string
  period: string
  description: string
}

export function FlipCard({ cover, logo, title, role, period, description }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative w-full h-44 sm:h-56 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={cover} alt={`${title} cover`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-3">
            <img src={logo} alt={`${title} logo`} className="h-10 object-contain" />
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 rounded-xl bg-gray-700 p-4 flex flex-col justify-center text-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-base font-bold mb-1">{title}</h3>
          <p className="text-blue-300 text-sm font-medium mb-1">{role}</p>
          <p className="text-gray-400 text-xs mb-2">{period}</p>
          <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">{description}</p>
        </div>
      </div>
    </div>
  )
}
