import { useEffect, useRef } from 'react'

const COOLDOWN_MS = 800
const MOBILE_BREAKPOINT = 1000

export function useHorizontalScroll(
  sectionCount: number,
  current: number,
  setCurrent: (i: number) => void
): void {
  const cooldownRef = useRef(false)
  const touchStartXRef = useRef<number | null>(null)
  // Keep a ref to current so event handlers always see the latest value
  const currentRef = useRef(current)
  currentRef.current = current

  useEffect(() => {
    const clamp = (i: number) => Math.max(0, Math.min(sectionCount - 1, i))

    const navigate = (direction: 'next' | 'prev') => {
      if (window.innerWidth < MOBILE_BREAKPOINT) return
      if (cooldownRef.current) return

      cooldownRef.current = true
      setTimeout(() => {
        cooldownRef.current = false
      }, COOLDOWN_MS)

      const next = direction === 'next'
        ? clamp(currentRef.current + 1)
        : clamp(currentRef.current - 1)
      setCurrent(next)
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) navigate('next')
      else if (e.deltaY < 0) navigate('prev')
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate('next')
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate('prev')
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartXRef.current === null) return
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX
      // swipe left (deltaX > 0) → next; swipe right (deltaX < 0) → prev
      if (deltaX > 30) navigate('next')
      else if (deltaX < -30) navigate('prev')
      touchStartXRef.current = null
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [sectionCount, setCurrent])
}
