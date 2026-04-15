import { motion } from 'framer-motion'
import { showcases } from '../data/showcases'
import { ShowcaseCard } from '../components/ShowcaseCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export function Showcases() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-transparent text-slate-100 px-6 py-12">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center mb-12"
        >
          Showcases
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {showcases.map((showcase) => (
            <motion.div key={showcase.id} variants={itemVariants}>
              <ShowcaseCard {...showcase} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

