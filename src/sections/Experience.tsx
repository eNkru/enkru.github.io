import { experience } from '../data/experience'
import { FlipCard } from '../components/FlipCard'

export function Experience() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {experience.map((entry) => (
            <FlipCard key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </div>
  )
}
