import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { Check, Send } from 'lucide-react'
import { SocialLinks } from '../components/SocialLinks'
import { CyberSectionHeading } from '../components/cyber'

const FORMSPREE_ID = 'xyzpanom'

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <div className="cyber-section w-screen min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <CyberSectionHeading
            title="Contact"
            subtitle="// establish connection"
            accent="magenta"
          />
        </motion.div>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent mb-6 mx-auto border border-accent/30"
              style={{ clipPath: 'var(--clip-chamfer)' }}
            >
              <Check size={28} strokeWidth={2} />
            </div>
            <p className="font-mono text-accent text-base uppercase tracking-wider">
              Transmission received.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              I'll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="cyber-label block mb-2 ml-1 flex items-center gap-1.5">
                <span className="text-accent">{'>'}</span> Name
              </label>
              <div className="relative">
                <span data-theme-form-prefix className="absolute left-3 top-1/2 -translate-y-1/2 text-accent font-mono text-sm pointer-events-none select-none">{'>'}</span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="cyber-input"
                />
              </div>
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-xs mt-1 ml-1 font-mono" />
            </div>

            <div>
              <label htmlFor="email" className="cyber-label block mb-2 ml-1 flex items-center gap-1.5">
                <span className="text-accent">{'>'}</span> Email
              </label>
              <div className="relative">
                <span data-theme-form-prefix className="absolute left-3 top-1/2 -translate-y-1/2 text-accent font-mono text-sm pointer-events-none select-none">{'>'}</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="cyber-input"
                />
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-xs mt-1 ml-1 font-mono" />
            </div>

            <div>
              <label htmlFor="message" className="cyber-label block mb-2 ml-1 flex items-center gap-1.5">
                <span className="text-accent">{'>'}</span> Message
              </label>
              <div className="relative">
                <span data-theme-form-prefix className="absolute left-3 top-3 text-accent font-mono text-sm pointer-events-none select-none">{'>'}</span>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="cyber-input resize-none min-h-[120px] pt-3"
                />
              </div>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-xs mt-1 ml-1 font-mono" />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={state.submitting}
              className="cyber-button cyber-button-secondary w-full py-3.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {state.submitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-accent-secondary/30 border-t-accent-secondary rounded-full animate-spin" />
                  Transmitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={14} strokeWidth={1.5} />
                  Send Message
                </span>
              )}
            </motion.button>
          </motion.form>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <SocialLinks />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 z-10 w-full flex justify-center pb-2">
        <p className="text-center text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Howard Ju — All rights reserved
        </p>
      </div>
    </div>
  )
}
