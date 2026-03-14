import { useForm, ValidationError } from '@formspree/react'
import { Linkedin, Facebook, Mail } from 'lucide-react'

const FORMSPREE_ID = 'xyzpanom'

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-8">
      <div className="max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>

        {state.succeeded ? (
          <p className="text-green-400 text-center text-lg mb-6">
            Message sent! I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="mailto:enkru2000@hotmail.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </div>
  )
}
