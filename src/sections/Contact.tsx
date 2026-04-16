import { useForm, ValidationError } from '@formspree/react'
import { Linkedin, Facebook, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const FORMSPREE_ID = 'xyzpanom'

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-transparent text-slate-100 px-6 py-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-xl w-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Contact</h2>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 text-lg font-medium">
              Message sent! I'll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1.5 text-slate-300 ml-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all shadow-inner"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-slate-300 ml-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all shadow-inner"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1.5 text-slate-300 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Let's build something great together..."
                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all shadow-inner resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] transition-all mt-6"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        )}

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://www.linkedin.com/in/huawuju/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:enkru2000@hotmail.com" aria-label="Email" className="text-slate-400 hover:text-purple-400 transform hover:-translate-y-1 transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      {/* Footer is part of the section container but outside the card */}
      <div className="absolute bottom-6 left-0 right-0 z-10 w-full flex justify-center pb-2">
        <p className="text-center text-slate-500 text-sm tracking-wide font-medium">
          © {new Date().getFullYear()} Howard Ju. All rights reserved.
        </p>
      </div>
    </div>
  )
}

