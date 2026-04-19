import { Linkedin, Github, Mail } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/huawuju/',
    icon: Linkedin,
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-400',
    external: true,
  },
  {
    href: 'https://github.com/eNkru',
    icon: Github,
    label: 'GitHub',
    hoverColor: 'hover:text-slate-200',
    external: true,
  },
  {
    href: 'mailto:enkru2000@hotmail.com',
    icon: Mail,
    label: 'Email',
    hoverColor: 'hover:text-purple-400',
    external: false,
  },
] as const

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = 'flex justify-center gap-6' }: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label, hoverColor, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={`text-slate-400 ${hoverColor} transform hover:-translate-y-1 transition-all duration-300`}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}
