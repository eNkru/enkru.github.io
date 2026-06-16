import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type Theme = 'old' | 'matrix' | 'light'

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('theme-matrix', theme === 'matrix')
    document.documentElement.classList.toggle('theme-old', theme === 'old')
    document.documentElement.classList.toggle('theme-light', theme === 'light')
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
