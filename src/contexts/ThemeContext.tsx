import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type Theme = 'paper' | 'old' | 'matrix'

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Theme-specific font URLs. Paper uses the fonts already loaded in index.html.
const THEME_FONTS: Partial<Record<Theme, string>> = {
  matrix: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap',
  old: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap',
}

const THEME_CLASSES: Record<Theme, string> = {
  paper: 'theme-paper',
  old: 'theme-old',
  matrix: 'theme-matrix',
}

function loadThemeFont(theme: Theme) {
  const existingLink = document.getElementById('theme-font') as HTMLLinkElement | null
  const fontUrl = THEME_FONTS[theme]

  if (!fontUrl) {
    existingLink?.remove()
    return
  }

  if (existingLink) {
    if (existingLink.href === fontUrl) return // Already loaded
    existingLink.href = fontUrl
  } else {
    const link = document.createElement('link')
    link.id = 'theme-font'
    link.rel = 'stylesheet'
    link.href = fontUrl
    document.head.appendChild(link)
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('paper')

  useEffect(() => {
    for (const [key, className] of Object.entries(THEME_CLASSES)) {
      document.documentElement.classList.toggle(className, key === theme)
    }
    loadThemeFont(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'paper' ? 'old' : prev === 'old' ? 'matrix' : 'paper'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
