import { useEffect, useState } from 'react'
import { useTheme, type Theme } from '../contexts/ThemeContext'

export interface NavItem {
  id: string
  label: string
}

const THEME_OPTIONS: { key: Theme; label: string; short: string }[] = [
  { key: 'paper', label: 'Paper', short: 'Paper' },
  { key: 'old', label: 'Slate', short: 'Slate' },
  { key: 'matrix', label: 'Matrix', short: 'Matrix' },
]

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 p-0.5"
      style={{
        borderRadius: 'var(--radius-chip)',
        boxShadow: 'inset 0 0 0 1px var(--color-border)',
      }}
      role="group"
      aria-label="Appearance"
    >
      {THEME_OPTIONS.map(({ key, label, short }) => {
        const active = theme === key
        return (
          <button
            key={key}
            type="button"
            onClick={() => setTheme(key)}
            aria-pressed={active}
            style={{ borderRadius: 'calc(var(--radius-chip) - 2px)' }}
            className={`cursor-pointer px-2 py-1 font-mono text-[11px] tracking-[0.04em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              active
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{short}</span>
          </button>
        )
      })}
    </div>
  )
}

function SectionLinks({
  items,
  activeId,
  className = '',
}: {
  items: NavItem[]
  activeId: string
  className?: string
}) {
  return (
    <nav
      className={`flex min-w-0 items-center gap-1 overflow-x-auto ${className}`}
      aria-label="Sections"
    >
      {items.map((item) => {
        const active = item.id === activeId
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active ? 'true' : undefined}
            style={{ borderRadius: 'calc(var(--radius-chip) - 2px)' }}
            className={`shrink-0 px-2.5 py-1.5 text-[13px] transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              active ? 'font-medium text-foreground' : 'text-muted-foreground'
            }`}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

export interface PaperHeaderProps {
  items: NavItem[]
  activeId: string
}

/**
 * Sticky editorial header: wordmark, section links and an appearance switch.
 * Desktop keeps everything on one row; small screens get a second,
 * horizontally scrollable link row.
 */
export function PaperHeader({ items, activeId }: PaperHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="v-page flex h-14 items-center gap-4">
        <a
          href="#section-intro"
          className="flex shrink-0 items-center gap-2 font-semibold tracking-[-0.02em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center bg-foreground font-mono text-[10px] font-bold text-background"
            style={{ borderRadius: 'calc(var(--radius-btn) * 0.6)' }}
          >
            HJ
          </span>
          <span className="hidden text-[14.5px] sm:inline">Howard Ju</span>
        </a>

        <SectionLinks items={items} activeId={activeId} className="ml-2 hidden flex-1 md:flex" />

        <div className="ml-auto flex items-center gap-2">
          <ThemeSwitch />
        </div>
      </div>

      {/* Compact link row — small screens only */}
      <div className="v-page md:hidden">
        <SectionLinks
          items={items}
          activeId={activeId}
          className="section-links-compact -mx-1 h-10 border-t border-border/60"
        />
      </div>
    </header>
  )
}
