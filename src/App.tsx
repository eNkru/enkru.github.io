import { useState, useEffect, useCallback } from 'react'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import { PaperHeader, type NavItem } from './components/PaperHeader'
import { Intro } from './sections/Intro'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Showcases } from './sections/Showcases'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { GitHubShowcase } from './sections/GitHubShowcase'

const SECTION_LABELS = ['Intro', 'About', 'Skills', 'Showcases', 'Open Source', 'Experience', 'Contact'] as const
const SECTION_IDS = [
  'section-intro',
  'section-about',
  'section-skills',
  'section-showcases',
  'section-open-source',
  'section-experience',
  'section-contact',
] as const
const SHOWCASES_INDEX = SECTION_LABELS.indexOf('Showcases')
const CONTACT_INDEX = SECTION_LABELS.indexOf('Contact')

const NAV_ITEMS: NavItem[] = SECTION_IDS.slice(1).map((id, i) => ({
  id,
  label: SECTION_LABELS[i + 1],
}))

function AppContent() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting)
        if (!activeEntry) return

        const index = SECTION_IDS.indexOf(activeEntry.target.id as typeof SECTION_IDS[number])
        if (index !== -1) setCurrentSection(index)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const navigateToSection = useCallback((index: number) => {
    document.getElementById(SECTION_IDS[index])?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  const navigateToShowcases = useCallback(() => {
    navigateToSection(SHOWCASES_INDEX)
  }, [navigateToSection])

  const navigateToContact = useCallback(() => {
    navigateToSection(CONTACT_INDEX)
  }, [navigateToSection])

  const sections = [
    <Intro onViewWork={navigateToShowcases} onContact={navigateToContact} />,
    <About />,
    <Skills />,
    <Showcases />,
    <GitHubShowcase />,
    <Experience />,
    <Contact />,
  ]

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <PaperHeader items={NAV_ITEMS} activeId={SECTION_IDS[currentSection]} />

      <main id="main-content" className="w-full overflow-x-clip" tabIndex={-1}>
        {sections.map((section, i) => (
          <section key={SECTION_LABELS[i]} id={SECTION_IDS[i]} aria-label={SECTION_LABELS[i]}>
            {section}
          </section>
        ))}
      </main>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      {/* Honour prefers-reduced-motion for JS-driven animations too */}
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
