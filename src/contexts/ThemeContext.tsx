import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

type Theme = 'old' | 'matrix'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('old')

  useEffect(() => {
    document.documentElement.classList.toggle('theme-matrix', theme === 'matrix')
    document.documentElement.classList.toggle('theme-old', theme === 'old')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'old' ? 'matrix' : 'old'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
