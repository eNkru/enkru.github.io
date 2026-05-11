import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import { cn } from './utils'

type CyberPanelVariant = 'default' | 'terminal' | 'holographic'

export interface CyberPanelProps extends ComponentPropsWithoutRef<'div'> {
  variant?: CyberPanelVariant
  hoverEffect?: boolean
  children: ReactNode
}

const variantClasses: Record<CyberPanelVariant, string> = {
  default: 'cyber-card',
  terminal: 'cyber-card-terminal pt-0',
  holographic: [
    'bg-muted/30 border border-accent/30',
    'backdrop-blur-sm',
    'shadow-[var(--shadow-neon-sm)]',
    'clip-path: var(--clip-chamfer)',
  ].join(' '),
}

export function CyberPanel({
  variant = 'default',
  hoverEffect = true,
  className,
  children,
  ...rest
}: CyberPanelProps) {
  return (
    <div
      className={cn(
        variantClasses[variant],
        !hoverEffect && 'hover:transform-none hover:shadow-none hover:border-current',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
