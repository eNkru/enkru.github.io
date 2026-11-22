import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Theme = 'paper' | 'old' | 'matrix'

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'portfolio-theme'

/** Browser chrome colour per theme, mirrors each theme's --color-background. */
const THEME_META_COLOR: Record<Theme, string> = {
  paper: '#fcfbf9',
  old: '#16162a',
  matrix: '#12121e',
}

// Theme-specific font URLs. Paper uses the fonts already loaded in index.html.
const THEME_FONTS: Partial<Record<Theme, string>> = {
  matrix: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap',
  old: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap',
}

const THEME_CLASSES: Record<Theme, string> = {
  paper: 'theme-paper',
  old: 'theme-old',
  matrix: 'theme-matrix',
}

function isTheme(value: unknown): value is Theme {
  return value === 'paper' || value === 'old' || value === 'matrix'
}

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (isTheme(stored)) return stored
  } catch {
    // localStorage may be unavailable (private mode, blocked cookies)
  }
  return 'paper'
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
  const [theme, setTheme] = useState<Theme>(readStoredTheme)

  useEffect(() => {
    for (const [key, className] of Object.entries(THEME_CLASSES)) {
      document.documentElement.classList.toggle(className, key === theme)
    }
    loadThemeFont(theme)

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_META_COLOR[theme])

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Non-fatal: the theme still applies for this session
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
