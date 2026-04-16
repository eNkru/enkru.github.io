import { motion } from 'framer-motion'

export function About() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-transparent text-slate-100 px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
      >
        {/* Bio text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed sm:text-lg font-light">
              Full Stack Developer with <strong className="text-blue-300 font-semibold">20 years of experience</strong> building scalable web platforms and enterprise-grade systems.
            </p>
            <p className="text-slate-300 leading-relaxed sm:text-lg font-light">
              I've worked across financial media, telecommunications, energy, and government sectors — delivering solutions for organisations including <span className="text-slate-100 font-medium">TVNZ, SKY, Mercury, Vector, Xero, and New Zealand Customs</span>.
            </p>
            <p className="text-slate-300 leading-relaxed sm:text-lg font-light">
              I enjoy turning complex problems into clean, reliable systems and exploring how AI can enhance the way developers build software.
            </p>
          </div>
        </div>

        {/* Profile photo */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/img/aboutme2.jpg"
              alt="Profile photo"
              className="relative relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

