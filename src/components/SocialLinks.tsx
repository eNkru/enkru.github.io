import { Linkedin, Github, Mail } from 'lucide-react'
import { cn } from '../utils/cn'

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/huawuju/',
    icon: Linkedin,
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/enkru',
    icon: Github,
    label: 'GitHub',
    external: true,
  },
  {
    href: 'mailto:enkru2000@hotmail.com',
    icon: Mail,
    label: 'Email',
    external: false,
  },
] as const

interface SocialLinksProps {
  className?: string
  /** Compact renders icon-only chips; default renders labelled buttons. */
  compact?: boolean
}

export function SocialLinks({
  className = 'flex flex-wrap justify-center gap-2.5',
  compact = false,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={cn(
            'inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200',
            'hover:bg-muted hover:text-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            compact
              ? 'h-8 w-8 justify-center'
              : 'h-10 px-3.5 font-mono text-[11px] uppercase tracking-[0.12em]',
          )}
          style={{
            borderRadius: 'var(--radius-chip)',
            boxShadow: compact ? undefined : 'inset 0 0 0 1px var(--color-border)',
          }}
        >
          <Icon size={compact ? 15 : 14} strokeWidth={1.6} aria-hidden="true" />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  )
}
