import { motion } from 'framer-motion'
import { showcases } from '../data/showcases'
import { ShowcaseCard } from '../components/ShowcaseCard'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Showcases() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-[#0a0a0a] text-slate-100 px-6 py-16">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center mb-3"
        >
          Showcases
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-28 h-0.5 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 mx-auto mb-12 origin-center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {showcases.map((showcase) => (
            <motion.div key={showcase.id} variants={fadeUp}>
              <ShowcaseCard {...showcase} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
