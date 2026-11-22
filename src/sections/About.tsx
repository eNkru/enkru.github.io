import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { PaperSectionHeading } from '../components/PaperSectionHeading'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
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

const FACTS = [
  'Financial media, telecommunications, energy and government sectors',
  'Platforms for TVNZ, SKY, Mercury, Vector, Xero and NZ Customs',
  'Integration architecture: REST APIs, microservices and API gateways',
  'Recent focus on LLM integration, RAG and AI-augmented delivery',
]

export function About() {
  return (
    <div className="v-section w-full">
      <div className="v-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          {/* ── Left: heading + stats ── */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <PaperSectionHeading index="01" kicker="About" title="Twenty years of shipping systems that stay up." />
            </motion.div>

            <motion.dl
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 grid grid-cols-3 gap-px overflow-hidden"
              style={{ background: 'var(--color-border)', borderRadius: 'var(--radius-card)' }}
            >
              {[
                { value: 20, suffix: '+', label: 'Years' },
                { value: 8, suffix: '', label: 'Companies' },
                { value: 6, suffix: '', label: 'Sectors' },
              ].map((stat) => (
                <div key={stat.label} className="bg-card px-4 py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="m-0">
                    <span className="block text-[clamp(22px,2.4vw,28px)] font-semibold leading-none tracking-[-0.03em] text-foreground tabular-nums">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="v-meta mt-2 block text-[10.5px] uppercase tracking-[0.12em]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: prose + facts ── */}
          <div className="lg:pt-2">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[clamp(17px,1.5vw,20px)] leading-[1.6] tracking-[-0.01em] text-foreground"
            >
              Senior full-stack and integration consultant with twenty years of experience
              building scalable web platforms and enterprise-grade systems.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="v-lede mt-5"
            >
              I've worked across financial media, telecommunications, energy and government —
              delivering solutions for organisations including TVNZ, SKY, Mercury, Vector, Xero
              and New Zealand Customs.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="v-lede mt-4"
            >
              I enjoy turning complex problems into clean, reliable systems, and exploring how AI
              can improve the way developers build software.
            </motion.p>

            <motion.ul
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="mt-8 space-y-3 border-t border-border pt-8"
            >
              {FACTS.map((fact) => (
                <li key={fact} className="flex gap-3 text-[14.5px] leading-relaxed text-foreground/90">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-1 w-3 shrink-0 rounded-full bg-[var(--color-accent)]"
                  />
                  {fact}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  )
}
