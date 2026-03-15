import { showcases } from '../data/showcases'
import { ShowcaseCard } from '../components/ShowcaseCard'

export function Showcases() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-800 text-white px-6 py-12">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Showcases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.id} {...showcase} />
          ))}
        </div>
      </div>
    </div>
  )
}
