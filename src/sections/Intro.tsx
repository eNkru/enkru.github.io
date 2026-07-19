import { motion } from 'framer-motion'
import { SocialLinks } from '../components/SocialLinks'
import { ChevronRight } from 'lucide-react'

export interface IntroProps {
  onViewWork?: () => void
}

export function Intro({ onViewWork }: IntroProps) {
  return (
    <div className="cyber-section w-full min-h-screen flex items-center justify-center py-16">

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Profile avatar — chamfered HUD frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-10"
        >
          {/* Outer neon frame */}
          <div
            data-theme-avatar-frame
            className="absolute inset-[-4px] bg-accent/20"
            style={{ clipPath: 'var(--clip-chamfer)' }}
          />
          <div
            data-theme-avatar-frame
            className="absolute inset-[-2px] bg-accent/40"
            style={{ clipPath: 'var(--clip-chamfer-sm)' }}
          />
          <img
            src="/img/aboutme2.jpg"
            alt="Howard Ju"
            loading="eager"
            fetchPriority="high"
            width={176}
            height={176}
            data-theme-avatar
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover"
            style={{ clipPath: 'var(--clip-chamfer)' }}
          />
          {/* Status indicator */}
          <div data-theme-status className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent shadow-[var(--shadow-neon)] z-10" style={{ clipPath: 'var(--clip-chamfer-sm)' }} />
        </motion.div>

        {/* Name — glitched headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="cyber-heading cyber-glitch text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-foreground mb-4"
          data-text="Howard Ju"
        >
          Howard Ju
        </motion.h1>

        {/* Terminal subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="font-mono text-sm sm:text-base text-accent/80 mb-2 flex items-center gap-1"
        >
          <ChevronRight size={14} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
          <span className="uppercase tracking-[0.15em]">Senior Full-Stack &amp; Integration Consultant</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="font-mono text-xs sm:text-sm text-muted-foreground tracking-[0.1em] uppercase cyber-cursor"
        >
          20 years building enterprise web, integration &amp; cloud platforms
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mt-8 mb-8"
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SocialLinks />
        </motion.div>

        {/* View work CTA */}
        {onViewWork && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={onViewWork}
              className="cyber-button inline-flex items-center gap-2"
            >
              View work
              <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </motion.div>
        )}

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3 text-muted-foreground/40">
            <span className="cyber-label hidden sm:inline">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            <span className="cyber-label sm:hidden">Scroll</span>
          </div>
          <span className="cyber-label text-muted-foreground/25 hidden sm:inline">or use the dots to navigate</span>
        </motion.div>
      </div>
    </div>
  )
}
