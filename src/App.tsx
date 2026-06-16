import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import { SectionDots } from './components/SectionDots'
import { Theme, ThemeProvider, useTheme } from './contexts/ThemeContext'
import { Intro } from './sections/Intro'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Showcases } from './sections/Showcases'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { GitHubShowcase } from './sections/GitHubShowcase'
import { isCompactViewport } from './utils/viewport'
import { Monitor, Sun, Moon } from 'lucide-react'

const SECTION_LABELS = ['Intro', 'About', 'Skills', 'Showcases', 'Open Source', 'Experience', 'Contact']
const SECTION_COUNT = SECTION_LABELS.length
const slideTransition = {
  type: 'tween' as const,
  ease: 'easeInOut' as const,
  duration: 0.6,
}

const SECTIONS = [
  <Intro />,
  <About />,
  <Skills />,
  <Showcases />,
  <GitHubShowcase />,
  <Experience />,
  <Contact />,
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themes: { key: Theme; icon: React.ElementType; label: string }[] = [
    { key: 'light',  icon: Sun,     label: 'Light' },
    { key: 'old',    icon: Moon,    label: 'Dark' },
    { key: 'matrix', icon: Monitor, label: 'Matrix' },
  ]

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-px bg-background/80 backdrop-blur-sm border border-border p-1">
      {themes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          aria-label={`Switch to ${label} theme`}
          className={`cursor-pointer flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-200 ${
            theme === key
              ? 'text-foreground bg-accent/10 border border-accent/30'
              : 'text-muted-foreground hover:text-foreground border border-transparent'
          }`}
        >
          <Icon size={11} strokeWidth={1.5} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}

function AppContent() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isCompact, setIsCompact] = useState(isCompactViewport())

  useHorizontalScroll(SECTION_COUNT, currentSection, setCurrentSection, isCompact)

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(isCompactViewport())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isCompact) {
    return (
      <div className="w-screen overflow-y-auto">
        {SECTIONS.map((section, i) => (
          <div
            key={SECTION_LABELS[i]}
            className={`relative ${i < SECTIONS.length - 1 ? 'pb-4' : ''}`}
          >
            {section}
            {i < SECTIONS.length - 1 && (
              <div className="flex items-center justify-center py-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              </div>
            )}
          </div>
        ))}
        <ThemeToggle />
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
      <ThemeToggle />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
