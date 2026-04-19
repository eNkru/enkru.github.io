import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SocialLinks } from '../components/SocialLinks'

const BG_IMAGES = [
  '/img/background/1.jpg',
  '/img/background/1.1.jpg',
  '/img/background/2.jpg',
  '/img/background/2.1.jpg',
]

export function Intro() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background images with crossfade */}
      {BG_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === bgIndex ? 0.4 : 0 }}
        />
      ))}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/70 to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Profile photo with animated ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-500/40 blur-md animate-pulse" />
          {/* Inner border ring */}
          <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />
          <img
            src="/img/aboutme2.jpg"
            alt="Howard Ju"
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-[3px] border-[#0a0a0a]"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3"
        >
          Howard Ju
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-5"
        />

        {/* Role / tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg font-light text-slate-300/90 tracking-[0.25em] uppercase max-w-xl leading-relaxed"
        >
          Open minded consultant
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="text-xs sm:text-sm md:text-base font-medium text-slate-400 tracking-[0.2em] uppercase mt-1.5"
        >
          Solution analysis &amp; design &bull; Implementation
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="mt-8"
        >
          <SocialLinks />
        </motion.div>

      </div>
    </div>
  )
}
