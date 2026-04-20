export const MOBILE_BREAKPOINT = 1000

export function isCompactViewport(): boolean {
  return window.innerWidth < MOBILE_BREAKPOINT
}
