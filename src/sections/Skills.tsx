import { skills } from '../data/skills'

export function Skills() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800 text-white px-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-gray-700/60 rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-300">{cat.category}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="mt-1 text-blue-400">▸</span>
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
