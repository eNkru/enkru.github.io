import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
          style={{ opacity: i === bgIndex ? 0.6 : 0 }}
        />
      ))}

      {/* Modern gradient overlay / vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0a0a0a]/60 to-[#0a0a0a] pointer-events-none" />

      {/* Content wrapper with glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-8 md:px-16 py-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text"
        >
          Howard Ju
        </motion.h1>
        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-sm sm:text-base md:text-lg font-medium text-slate-300 tracking-[0.2em] uppercase leading-relaxed max-w-2xl mx-auto"
        >
          Open minded consultant <span className="hidden sm:inline">&bull;</span><br className="sm:hidden" /> Solution analysis &amp; design &bull; Implementation
        </motion.p>
      </motion.div>

      {/* Scroll indicator arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="rotate-90 lg:rotate-0"
          aria-label="Scroll to next section"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </motion.div>
    </div>
  )
}

