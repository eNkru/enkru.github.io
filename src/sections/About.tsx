import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionValue.set(target)
  }, [inView, motionValue, target])

  useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.round(v)))
  }, [spring])

  return <span ref={ref}>{display}{suffix}</span>
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
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
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

          {/* Quick stats with animated counters */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex gap-6 pt-4"
          >
            {[
              { value: 20, suffix: '+', label: 'Years', color: 'from-cyan-400 to-blue-500' },
              { value: 8, suffix: '', label: 'Companies', color: 'from-blue-400 to-indigo-500' },
              { value: 6, suffix: '', label: 'Sectors', color: 'from-indigo-400 to-purple-500' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 text-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
              >
                <div className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative code-style accent (replaces duplicate profile photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0 hidden md:block"
        >
          <div className="relative w-64 sm:w-72 rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-mono text-sm leading-relaxed shadow-2xl shadow-blue-500/5">
            {/* Window dots */}
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="text-slate-500">{'//'} whoami</div>
            <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-500">=</span> {'{'}</div>
            <div className="pl-4"><span className="text-blue-300">name</span><span className="text-slate-500">:</span> <span className="text-amber-300">'Howard Ju'</span><span className="text-slate-500">,</span></div>
            <div className="pl-4"><span className="text-blue-300">role</span><span className="text-slate-500">:</span> <span className="text-amber-300">'Full Stack Dev'</span><span className="text-slate-500">,</span></div>
            <div className="pl-4"><span className="text-blue-300">location</span><span className="text-slate-500">:</span> <span className="text-amber-300">'Auckland, NZ'</span><span className="text-slate-500">,</span></div>
            <div className="pl-4"><span className="text-blue-300">passion</span><span className="text-slate-500">:</span> <span className="text-amber-300">'AI × Dev'</span><span className="text-slate-500">,</span></div>
            <div>{'}'}</div>
            <div className="mt-2 text-slate-500">{'//'} always learning 🚀</div>
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
