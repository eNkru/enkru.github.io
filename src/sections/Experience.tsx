import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import { FlipCard } from '../components/FlipCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export function Experience() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-transparent text-slate-100 px-6 py-12">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center mb-12"
        >
          Experience
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {experience.map((entry) => (
            <motion.div key={entry.id} variants={itemVariants}>
              <FlipCard {...entry} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

