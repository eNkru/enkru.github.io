import { motion } from 'framer-motion'
import { showcases } from '../data/showcases'
import { ShowcaseCard } from '../components/ShowcaseCard'
import { CyberSectionHeading } from '../components/cyber'

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
    <div className="cyber-section w-screen min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <CyberSectionHeading
            title="Showcases"
            subtitle="Featured Work"
            accent="magenta"
          />
        </motion.div>

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
