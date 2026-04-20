import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { User, Mail, MessageSquare } from 'lucide-react'
import { SocialLinks } from '../components/SocialLinks'

const FORMSPREE_ID = 'xyzpanom'

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16 relative">
      <div className="max-w-lg w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center mb-3"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-14 h-0.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mb-10 origin-center"
        />

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-400 mb-6 mx-auto border border-green-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 text-lg font-medium">
              Message sent! I'll get back to you soon.
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
              <label htmlFor="name" className="block text-sm font-semibold mb-1.5 text-slate-300 ml-1 flex items-center gap-1.5">
                <User size={14} className="text-slate-500" />
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/40 transition-all"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-slate-300 ml-1 flex items-center gap-1.5">
                <Mail size={14} className="text-slate-500" />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/40 transition-all"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1.5 text-slate-300 ml-1 flex items-center gap-1.5">
                <MessageSquare size={14} className="text-slate-500" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Let's build something great together..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500/40 transition-all resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(236,72,153,0.2)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.3)] transition-all"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
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
        <p className="text-center text-slate-500 text-sm tracking-wide font-medium">
          © {new Date().getFullYear()} Howard Ju. All rights reserved.
        </p>
      </div>
    </div>
  )
}
