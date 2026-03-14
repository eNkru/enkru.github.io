import { showcases } from '../data/showcases'
import { ShowcaseCard } from '../components/ShowcaseCard'

export function Showcases() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800 text-white px-8 overflow-y-auto">
      <div className="max-w-5xl w-full py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Showcases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.id} {...showcase} />
          ))}
        </div>
      </div>
    </div>
  )
}
