import { motion } from 'framer-motion'
import { showcases } from '../data/showcases'
import { ShowcaseCard } from '../components/ShowcaseCard'
import { PaperSectionHeading } from '../components/PaperSectionHeading'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Showcases() {
  const [lead, ...rest] = showcases

  return (
    <div className="v-section w-full">
      <div className="v-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <PaperSectionHeading
            index="03"
            kicker="Selected work"
            title="Platforms I helped put in front of real customers."
            lede="A short list of public-facing products, with the role I held and what changed for the business."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6"
        >
          {lead && (
            <motion.div variants={fadeUp} className="lg:col-span-6">
              <ShowcaseCard {...lead} feature />
            </motion.div>
          )}

          {rest.map((showcase, i) => {
            // Odd trailing card gets the full row so the grid never leaves a gap.
            const isTrailingOdd = rest.length % 2 === 1 && i === rest.length - 1
            return (
              <motion.div
                key={showcase.id}
                variants={fadeUp}
                className={isTrailingOdd ? 'md:col-span-2 lg:col-span-6' : 'lg:col-span-3'}
              >
                <ShowcaseCard {...showcase} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
