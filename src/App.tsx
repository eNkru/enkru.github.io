import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import { SectionDots } from './components/SectionDots'
import { Intro } from './sections/Intro'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { SkillCloud } from './sections/SkillCloud'
import { Showcases } from './sections/Showcases'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'

const SECTION_LABELS = ['Intro', 'About', 'Skills', 'Skill Cloud', 'Showcases', 'Experience', 'Contact']
const SECTION_COUNT = SECTION_LABELS.length
const MOBILE_BREAKPOINT = 1000

const slideTransition = {
  type: 'tween' as const,
  ease: 'easeInOut' as const,
  duration: 0.6,
}

const SECTIONS = [
  <Intro />,
  <About />,
  <Skills />,
  <SkillCloud />,
  <Showcases />,
  <Experience />,
  <Contact />,
]

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)

  useHorizontalScroll(SECTION_COUNT, currentSection, setCurrentSection)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) {
    return (
      <div className="w-screen overflow-y-auto">
        {SECTIONS.map((section, i) => (
          <div key={SECTION_LABELS[i]}>{section}</div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <motion.div
        className="flex h-full"
        animate={{ x: `${currentSection * -100}vw` }}
        transition={slideTransition}
      >
        {SECTIONS.map((section, i) => (
          <div key={SECTION_LABELS[i]} className="w-screen h-screen flex-shrink-0">
            {section}
          </div>
        ))}
      </motion.div>
      <SectionDots
        current={currentSection}
        onChange={setCurrentSection}
        labels={SECTION_LABELS}
      />
    </div>
  )
}

export default App
