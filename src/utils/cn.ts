/**
 * Minimal className merger — safe for Tailwind.
 * Filters falsy values and joins.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
