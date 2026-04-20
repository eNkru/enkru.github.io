import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export interface ShowcaseCardProps {
  title: string
  images: string[]
  url: string
  description?: string
}

export function ShowcaseCard({ title, images, url, description }: ShowcaseCardProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Carousel */}
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-full relative">
              <div className="aspect-video bg-[#0a0a0a] overflow-hidden">
                <img
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Soft shadow overlay for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
      </div>

      {/* Footer */}
      <div className="p-5 flex flex-col gap-2 mt-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-100 font-bold text-sm tracking-wide">{title}</h3>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1"
            >
              Visit
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          )}
        </div>
        {description && (
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  )
}

