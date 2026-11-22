import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/cn'

export interface PaperSectionHeadingProps extends ComponentPropsWithoutRef<'div'> {
  /** Two-digit section index, e.g. "01" */
  index?: string
  /** Short mono kicker label, e.g. "About" */
  kicker: string
  title: string
  lede?: string
  align?: 'left' | 'center'
}

/**
 * Editorial section heading: mono kicker with index, tight-tracked title,
 * optional lede. Mirrors the reference site's numbered section rhythm.
 */
export function PaperSectionHeading({
  index,
  kicker,
  title,
  lede,
  align = 'left',
  className,
  ...rest
}: PaperSectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
      {...rest}
    >
      <p className="v-kicker flex items-center gap-2">
        {index && <span className="tabular-nums opacity-60">{index}</span>}
        {index && <span className="opacity-40">·</span>}
        <span>{kicker}</span>
      </p>
      <h2 className="v-title mt-3">{title}</h2>
      {lede && (
        <p className={cn('v-lede mt-3', align === 'center' && 'mx-auto')}>{lede}</p>
      )}
    </div>
  )
}
