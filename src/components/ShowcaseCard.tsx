import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export interface ShowcaseCardProps {
  title: string
  images: string[]
  url: string
}

export function ShowcaseCard({ title, images, url }: ShowcaseCardProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])

  return (
    <div className="bg-gray-700/60 rounded-xl overflow-hidden border border-white/10 flex flex-col">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-full">
              <div className="aspect-video bg-gray-900">
                <img
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between mt-auto">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-xs underline"
          >
            View →
          </a>
        )}
      </div>
    </div>
  )
}
