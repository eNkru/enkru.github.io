import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SocialLinks } from '../components/SocialLinks'
import { PaperSectionHeading } from '../components/PaperSectionHeading'

const FORMSPREE_ID = 'xyzpanom'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
}

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <div className="v-section w-full">
      <div className="v-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* ── Left: pitch ── */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <PaperSectionHeading
                index="06"
                kicker="Contact"
                title="Have a platform that needs untangling?"
                lede="I take on contract and consulting engagements, usually around integration, platform modernisation and AI-assisted delivery. Tell me what you are working on."
              />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mt-8 space-y-4">
              <a
                href="mailto:enkru2000@hotmail.com"
                className="group flex items-center justify-between gap-4 px-4 py-3.5 transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderRadius: 'var(--radius-btn)', boxShadow: 'inset 0 0 0 1px var(--color-border)' }}
              >
                <span>
                  <span className="v-meta block text-[10.5px] uppercase tracking-[0.14em]">Email</span>
                  <span className="mt-0.5 block text-[14.5px] font-medium text-foreground">
                    enkru2000@hotmail.com
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>

              <SocialLinks className="flex flex-wrap gap-2.5" />
            </motion.div>
          </div>

          {/* ── Right: form ── */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
            {state.succeeded ? (
              <div
                className="flex h-full flex-col items-start justify-center p-8"
                style={{ borderRadius: 'var(--radius-card)', boxShadow: 'inset 0 0 0 1px var(--color-border)' }}
              >
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-full"
                  style={{
                    background: 'color-mix(in srgb, var(--color-accent-tertiary) 12%, transparent)',
                    color: 'var(--color-accent-tertiary)',
                  }}
                >
                  <Check size={20} strokeWidth={2} />
                </span>
                <p className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-foreground">
                  Message received.
                </p>
                <p className="v-lede mt-2 text-[14px]">
                  Thanks for reaching out — I'll reply from my personal address within a day or two.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8"
                style={{
                  borderRadius: 'var(--radius-card)',
                  background: 'var(--color-card)',
                  boxShadow: 'inset 0 0 0 1px var(--color-border)',
                }}
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="v-meta mb-1.5 block text-[10.5px] uppercase tracking-[0.14em]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="v-input"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-1.5 block text-[11.5px] text-destructive"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="v-meta mb-1.5 block text-[10.5px] uppercase tracking-[0.14em]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="v-input"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-1.5 block text-[11.5px] text-destructive"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="v-meta mb-1.5 block text-[10.5px] uppercase tracking-[0.14em]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="A sentence or two about the problem is plenty."
                      className="v-input resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-1.5 block text-[11.5px] text-destructive"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="v-btn v-btn-primary mt-7 w-full"
                >
                  {state.submitting ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-background/30 border-t-background"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="v-meta mt-3 text-center text-[11px]">
                  Delivered via Formspree. No mailing list, no tracking pixels.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Footer ── */}
        <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="v-meta text-[11.5px]">
            © {new Date().getFullYear()} Howard Ju · Auckland, New Zealand
          </p>
          <p className="v-meta text-[11.5px]">
            Built with React, Vite and Tailwind · Deployed on GitHub Pages
          </p>
        </footer>
      </div>
    </div>
  )
}
