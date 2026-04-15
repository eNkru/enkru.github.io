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
      className="relative w-full h-48 sm:h-64 cursor-pointer group"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 rounded-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={cover} alt={`${title} cover`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
            <img src={logo} alt={`${title} logo`} className="h-10 object-contain drop-shadow-md" />
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#0f172a] p-5 flex flex-col justify-center text-slate-100 border border-white/10 shadow-inner"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
          <p className="text-blue-400 text-sm font-semibold mb-1">{role}</p>
          <p className="text-slate-400 text-xs mb-3 font-mono">{period}</p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed overflow-y-auto custom-scrollbar pr-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

