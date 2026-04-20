import { useState, useEffect, useCallback } from 'react'
import { ExternalLink, ImageIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ShowcaseCardProps {
  title: string
  images: string[]
  url: string
  description?: string
}

export function ShowcaseCard({ title, images, url, description }: ShowcaseCardProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [images.length, next])

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
    >
      {/* Subtle gradient glow on hover — amber/rose to match section accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image area */}
      <div className="relative aspect-video bg-[#0a0a0a] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        </AnimatePresence>

        {/* Gradient overlay at bottom of image for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent pointer-events-none" />

        {/* Image indicator dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i) }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-2 h-2 bg-white/80'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 relative">
        {/* Header: title + link */}
        <div className="flex items-center gap-2">
          <h3 className="text-slate-100 font-bold text-sm leading-snug group-hover:text-white transition-colors flex-1 min-w-0">
            {title}
          </h3>
          <span aria-hidden="true" className="flex items-center gap-1 text-blue-400/60 group-hover:text-blue-400 transition-colors text-xs font-semibold tracking-wider uppercase flex-shrink-0">
            Visit
            <ExternalLink size={12} />
          </span>
        </div>

        {/* Description — matches GitHubRepoCard description style */}
        {description && (
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Image count footer — matches GitHubRepoCard footer style */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <ImageIcon size={12} />
              {images.length} screenshots
            </span>
          </div>
        )}
      </div>
    </a>
  )
}
