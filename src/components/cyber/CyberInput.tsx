import { forwardRef, type ComponentPropsWithRef } from 'react'
import { cn } from './utils'

export interface CyberInputProps extends ComponentPropsWithRef<'input'> {
  prefix?: string
}

export const CyberInput = forwardRef<HTMLInputElement, CyberInputProps>(
  function CyberInput({ prefix = '>', className, ...rest }, ref) {
    return (
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent font-mono text-sm pointer-events-none select-none">
          {prefix}
        </span>
        <input
          ref={ref}
          className={cn('cyber-input', className)}
          {...rest}
        />
      </div>
    )
  },
)
