import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { CyberSectionHeading } from '../components/cyber'

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
    <div className="cyber-section w-screen min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Bio text */}
        <div className="flex-1 space-y-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
          >
            <CyberSectionHeading
              title="About Me"
              subtitle="// whoami"
              accent="cyan"
              align="left"
              className="mb-0"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-foreground/80 leading-relaxed sm:text-base font-light"
            >
              Full Stack Developer with <strong className="text-accent font-semibold">20 years of experience</strong> building scalable web platforms and enterprise-grade systems.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-foreground/80 leading-relaxed sm:text-base font-light"
            >
              I've worked across financial media, telecommunications, energy, and government sectors — delivering solutions for organisations including <span className="text-foreground font-medium">TVNZ, SKY, Mercury, Vector, Xero, and New Zealand Customs</span>.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-foreground/80 leading-relaxed sm:text-base font-light"
            >
              I enjoy turning complex problems into clean, reliable systems and exploring how AI can enhance the way developers build software.
            </motion.p>
          </div>

          {/* Quick stats — cyber stat cards */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex gap-4 pt-4"
          >
            {[
              { value: 20, suffix: '+', label: 'Years' },
              { value: 8, suffix: '', label: 'Companies' },
              { value: 6, suffix: '', label: 'Sectors' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 text-center p-4 bg-card border border-border"
                style={{ clipPath: 'var(--clip-chamfer-sm)' }}
              >
                <div className="text-2xl sm:text-3xl font-heading font-bold text-accent cyber-neon-text">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="cyber-label mt-1.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Terminal code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0 hidden md:block"
        >
          <div className="cyber-card-terminal w-64 sm:w-72 p-5 font-mono text-sm leading-relaxed">
            {/* Traffic light dots — rendered by ::before in CSS, but we need manual here */}
            <div className="flex gap-1.5 mb-4 -mt-0">
              <div className="w-2.5 h-2.5 bg-destructive/60" style={{ clipPath: 'var(--clip-chamfer-sm)' }} />
              <div className="w-2.5 h-2.5 bg-accent/60" style={{ clipPath: 'var(--clip-chamfer-sm)' }} />
              <div className="w-2.5 h-2.5 bg-accent-tertiary/60" style={{ clipPath: 'var(--clip-chamfer-sm)' }} />
            </div>
            <div className="text-muted-foreground">{'//'} whoami</div>
            <div><span className="text-accent-secondary">const</span> <span className="text-accent-tertiary">developer</span> <span className="text-muted-foreground">=</span> {'{'}</div>
            <div className="pl-4"><span className="text-accent">name</span><span className="text-muted-foreground">:</span> <span className="text-accent/80">'Howard Ju'</span><span className="text-muted-foreground">,</span></div>
            <div className="pl-4"><span className="text-accent">role</span><span className="text-muted-foreground">:</span> <span className="text-accent/80">'Full Stack Dev'</span><span className="text-muted-foreground">,</span></div>
            <div className="pl-4"><span className="text-accent">location</span><span className="text-muted-foreground">:</span> <span className="text-accent/80">'Auckland, NZ'</span><span className="text-muted-foreground">,</span></div>
            <div className="pl-4"><span className="text-accent">passion</span><span className="text-muted-foreground">:</span> <span className="text-accent/80">'AI × Dev'</span><span className="text-muted-foreground">,</span></div>
            <div>{'}'}</div>
            <div className="mt-2 text-muted-foreground">{'//'} always learning <span className="cyber-cursor" /></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
