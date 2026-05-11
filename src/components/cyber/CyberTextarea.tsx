import { forwardRef, type ComponentPropsWithRef } from 'react'
import { cn } from './utils'

export interface CyberTextareaProps extends ComponentPropsWithRef<'textarea'> {
  prefix?: string
}

export const CyberTextarea = forwardRef<HTMLTextAreaElement, CyberTextareaProps>(
  function CyberTextarea({ prefix = '>', className, ...rest }, ref) {
    return (
      <div className="relative">
        <span className="absolute left-3 top-3 text-accent font-mono text-sm pointer-events-none select-none">
          {prefix}
        </span>
        <textarea
          ref={ref}
          className={cn(
            'cyber-input resize-none min-h-[120px] pt-3',
            className,
          )}
          {...rest}
        />
      </div>
    )
  },
)
