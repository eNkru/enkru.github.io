export interface SectionDotsProps {
  current: number
  onChange: (i: number) => void
  labels: string[]
}

export function SectionDots({ current, onChange, labels }: SectionDotsProps) {
  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50"
      aria-label="Section navigation"
    >
      {labels.map((label, i) => (
        <button
          key={label}
          onClick={() => onChange(i)}
          aria-label={`Go to ${label}`}
          className={
            i === current
              ? 'bg-white w-3 h-3 rounded-full transition-all duration-300'
              : 'bg-white/40 w-2 h-2 rounded-full transition-all duration-300 self-center'
          }
        />
      ))}
    </nav>
  )
}
