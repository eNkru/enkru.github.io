import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import { cn } from './utils'

type CyberButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'glitch'
type CyberButtonSize = 'sm' | 'md' | 'lg'

export interface CyberButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: CyberButtonVariant
  size?: CyberButtonSize
  children: ReactNode
}

const sizeClasses: Record<CyberButtonSize, string> = {
  sm: 'text-[10px] px-3 py-1.5 tracking-[0.15em]',
  md: 'text-xs px-5 py-2.5 tracking-[0.1em]',
  lg: 'text-sm px-7 py-3 tracking-[0.1em]',
}

const variantClasses: Record<CyberButtonVariant, string> = {
  default: 'cyber-button',
  secondary: 'cyber-button cyber-button-secondary',
  outline: [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-semibold uppercase',
    'bg-transparent border border-border text-muted-foreground',
    'cursor-pointer transition-all duration-150',
    'hover:border-accent hover:text-accent hover:shadow-[var(--shadow-neon-sm)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'cyber-chamfer-sm',
  ].join(' '),
  ghost: [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-semibold uppercase',
    'bg-transparent border-none text-muted-foreground',
    'cursor-pointer transition-all duration-150',
    'hover:bg-accent/10 hover:text-accent',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ].join(' '),
  glitch: [
    'cyber-button',
    'bg-accent text-background',
    'shadow-[var(--shadow-neon)]',
    'hover:brightness-110',
  ].join(' '),
}

export function CyberButton({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...rest
}: CyberButtonProps) {
  return (
    <button
      className={cn(variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </button>
  )
}
