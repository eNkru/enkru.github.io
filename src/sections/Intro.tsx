import { useState, useEffect } from 'react'

const BG_IMAGES = [
  '/img/background/1.jpg',
  '/img/background/1.1.jpg',
  '/img/background/2.jpg',
  '/img/background/2.1.jpg',
]

export function Intro() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* Background images with crossfade */}
      {BG_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === bgIndex ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Howard Ju</h1>
        <p className="text-xl font-light tracking-widest uppercase">
          Open minded consultant. Solution analysis | design | implementation
        </p>
      </div>

      {/* Scroll indicator arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="Scroll to next section"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  )
}
