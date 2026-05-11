import { Linkedin, Github, Mail } from 'lucide-react'
import { cn } from './cyber/utils'

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/huawuju/',
    icon: Linkedin,
    label: 'LinkedIn',
    accent: 'text-accent-tertiary hover:border-accent-tertiary hover:shadow-[var(--shadow-neon-tertiary)]',
    external: true,
  },
  {
    href: 'https://github.com/eNkru',
    icon: Github,
    label: 'GitHub',
    accent: 'text-foreground hover:border-foreground hover:shadow-[0_0_5px_rgba(224,224,224,0.3)]',
    external: true,
  },
  {
    href: 'mailto:enkru2000@hotmail.com',
    icon: Mail,
    label: 'Email',
    accent: 'text-accent-secondary hover:border-accent-secondary hover:shadow-[var(--shadow-neon-secondary)]',
    external: false,
  },
] as const

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = 'flex justify-center gap-4' }: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label, accent, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5',
            'font-mono text-[10px] uppercase tracking-[0.2em]',
            'bg-card border border-border text-muted-foreground',
            'transition-all duration-200',
            'hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            accent,
          )}
          style={{ clipPath: 'var(--clip-chamfer-sm)' }}
        >
          <Icon size={16} strokeWidth={1.5} />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </div>
  )
}
