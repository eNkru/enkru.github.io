export function About() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900 text-white px-8">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
        {/* Bio text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer with over a decade of experience building
            scalable web applications and enterprise systems. I enjoy working at the intersection
            of clean architecture, modern technologies, and great user experiences.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Based in New Zealand, I’ve worked across industries including financial, media,
            telecommunications, energy generation, and government sectors — delivering
            solutions for organisations such as TVNZ, SKY, Mercury, Xero, and New Zealand Customs.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I maintain an open mindset toward the rapidly evolving AI landscape. I believe the
            future is not about humans versus AI, but about humans leveraging AI to amplify
            creativity, productivity, and innovation.
          </p>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0">
          <img
            src="/img/aboutme2.jpg"
            alt="Profile photo"
            className="w-56 h-56 rounded-full object-cover border-4 border-white/20"
          />
        </div>
      </div>
    </div>
  )
}
