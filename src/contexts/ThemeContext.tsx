import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type Theme = 'old' | 'matrix' | 'light'

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Theme-specific font URLs
const THEME_FONTS: Record<Theme, string> = {
  matrix: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap',
  old: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap',
  light: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap',
}

function loadThemeFont(theme: Theme) {
  const existingLink = document.getElementById('theme-font') as HTMLLinkElement | null
  const fontUrl = THEME_FONTS[theme]

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
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('theme-matrix', theme === 'matrix')
    document.documentElement.classList.toggle('theme-old', theme === 'old')
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    loadThemeFont(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'old' ? 'matrix' : prev === 'matrix' ? 'light' : 'old'))
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
