export function About() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        {/* Bio text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Full Stack Developer with 20 years of experience building scalable web
            platforms and enterprise-grade systems.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I've worked across financial media, telecommunications, energy, and government
            sectors — delivering solutions for organisations including TVNZ, SKY, Mercury, Vector,
            Xero, and New Zealand Customs.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I enjoy turning complex problems into clean, reliable systems and exploring how
            AI can enhance the way developers build software.
          </p>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0">
          <img
            src="/img/aboutme2.jpg"
            alt="Profile photo"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white/20"
          />
        </div>
      </div>
    </div>
  )
}
