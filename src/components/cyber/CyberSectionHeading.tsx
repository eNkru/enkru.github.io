import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './utils'

type AccentColor = 'green' | 'magenta' | 'cyan'

export interface CyberSectionHeadingProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  subtitle?: string
  accent?: AccentColor
  align?: 'left' | 'center'
}

const accentLineClasses: Record<AccentColor, string> = {
  green: 'bg-gradient-to-r from-accent to-accent/40',
  magenta: 'bg-gradient-to-r from-accent-secondary to-accent-secondary/40',
  cyan: 'bg-gradient-to-r from-accent-tertiary to-accent-tertiary/40',
}

export function CyberSectionHeading({
  title,
  subtitle,
  accent = 'green',
  align = 'center',
  className,
  ...rest
}: CyberSectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' && 'text-center',
        className,
      )}
      {...rest}
    >
      <h2
        className={cn(
          'cyber-heading',
          'text-3xl sm:text-4xl lg:text-5xl font-bold',
          'mb-3',
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'h-0.5 w-16',
          align === 'center' && 'mx-auto',
          accentLineClasses[accent],
        )}
      />
      {subtitle && (
        <p className="cyber-label mt-4 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
