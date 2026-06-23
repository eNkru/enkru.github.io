import { useState, useEffect, useCallback } from 'react'
import { ExternalLink, ImageIcon } from 'lucide-react'
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
}

export function ShowcaseCard({ title, images, url, description, role, techStack, problem, impact }: ShowcaseCardProps) {
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
      className="group cyber-card block flex flex-col relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Image area — surveillance monitor frame */}
      <div data-theme-showcase-image className="relative aspect-video bg-background overflow-hidden border-b border-border">
        {/* Scanlines over image */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)]" />

        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          />
        </AnimatePresence>

        {/* Corner HUD accents */}
        <div data-theme-hud-corner className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/40 pointer-events-none" />
        <div data-theme-hud-corner className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/40 pointer-events-none" />
        <div data-theme-hud-corner className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent/40 pointer-events-none" />
        <div data-theme-hud-corner className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/40 pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

        {/* Image indicator dots — neon micro-controls */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i) }}
                className={`cursor-pointer transition-all duration-200 ${
                  i === current
                    ? 'w-3 h-1.5 bg-accent shadow-[var(--shadow-neon-sm)]'
                    : 'w-1.5 h-1.5 bg-muted-foreground/50 hover:bg-accent/50'
                }`}
                style={{ clipPath: 'var(--clip-chamfer-sm)' }}
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
          <h3 className="font-mono text-foreground font-semibold text-sm leading-snug group-hover:text-accent transition-colors flex-1 min-w-0">
            {title}
          </h3>
          <span aria-hidden="true" className="flex items-center gap-1 text-accent-tertiary/60 group-hover:text-accent-tertiary transition-colors font-mono text-[10px] uppercase tracking-[0.15em] flex-shrink-0">
            Visit
            <ExternalLink size={11} strokeWidth={1.5} />
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Role */}
        {role && (
          <div className="flex items-center gap-1.5">
            <span className="cyber-label text-accent-secondary text-[10px] uppercase tracking-wider">Role:</span>
            <span className="text-foreground/70 text-xs font-mono">{role}</span>
          </div>
        )}

        {/* Tech stack */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 bg-accent-secondary/10 text-accent-secondary/70 text-[9px] font-mono tracking-wider border border-accent-secondary/20"
                style={{ clipPath: 'var(--clip-chamfer-sm)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Problem & impact — shown on hover or via subtle text */}
        {problem && (
          <p className="text-muted-foreground/60 text-[10px] leading-relaxed italic line-clamp-2">
            {problem}
          </p>
        )}
        {impact && (
          <p className="text-accent/70 text-[10px] font-mono leading-relaxed">
            → {impact}
          </p>
        )}

        {/* Image count footer */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground pt-1 border-t border-border font-mono">
            <span className="flex items-center gap-1.5">
              <ImageIcon size={12} strokeWidth={1.5} />
              {images.length} screenshots
            </span>
          </div>
        )}
      </div>
    </a>
  )
}
