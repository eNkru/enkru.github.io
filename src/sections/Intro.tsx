import { motion } from 'framer-motion'
import { SocialLinks } from '../components/SocialLinks'
import { ChevronRight } from 'lucide-react'

export function Intro() {
  return (
    <div className="cyber-section w-screen h-screen overflow-hidden flex items-center justify-center">

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
            loading="lazy"
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
          <ChevronRight size={14} strokeWidth={1.5} className="text-accent" />
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

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3 text-muted-foreground/40">
            <span className="cyber-label hidden sm:inline">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:hidden"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            <span className="cyber-label sm:hidden">Swipe</span>
          </div>
          <span className="cyber-label text-muted-foreground/25 hidden sm:inline">or use the dots to navigate</span>
        </motion.div>
      </div>
    </div>
  )
}
