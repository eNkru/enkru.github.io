import { motion } from 'framer-motion'
import { skills } from '../data/skills'

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export function Skills() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-transparent px-6 py-12">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center mb-12"
        >
          Skills
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-100">{cat.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:scale-105 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

