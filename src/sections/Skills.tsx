import { skills } from '../data/skills'

export function Skills() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-800 text-white px-6 py-12">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-gray-700/60 rounded-xl p-4 sm:p-6 border border-white/10"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-blue-300">{cat.category}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2">
                    <span className="mt-0.5 text-blue-400">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
