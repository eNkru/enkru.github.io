import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
}

export function About() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Bio text */}
        <div className="flex-1 space-y-6">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
          />

          <div className="space-y-4">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-slate-300 leading-relaxed sm:text-lg font-light"
            >
              Full Stack Developer with <strong className="text-blue-300 font-semibold">20 years of experience</strong> building scalable web platforms and enterprise-grade systems.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-300 leading-relaxed sm:text-lg font-light"
            >
              I've worked across financial media, telecommunications, energy, and government sectors — delivering solutions for organisations including <span className="text-slate-100 font-medium">TVNZ, SKY, Mercury, Vector, Xero, and New Zealand Customs</span>.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-300 leading-relaxed sm:text-lg font-light"
            >
              I enjoy turning complex problems into clean, reliable systems and exploring how AI can enhance the way developers build software.
            </motion.p>
          </div>

          {/* Quick stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex gap-8 pt-4"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">20+</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">8</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">6</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">Sectors</div>
            </div>
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-lg animate-pulse" />
            {/* Inner border ring */}
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-blue-400/60 via-indigo-400/60 to-purple-400/60" />
            <img
              src="/img/aboutme2.jpg"
              alt="Profile photo"
              className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-[3px] border-[#0a0a0a]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
