export interface Showcase {
  id: string
  title: string
  images: string[]
  url: string
  description?: string
  role?: string
  techStack?: string[]
  problem?: string
  impact?: string
}

export const showcases: Showcase[] = [
  {
    id: "tvnz-one-news",
    title: "TVNZ One News",
    images: [
      "/img/showcases/webp/1News-1.webp",
      "/img/showcases/webp/1News-2.webp",
      "/img/showcases/webp/1News-3.webp",
    ],
    url: "https://1news.co.nz",
    description: "Led the One News digital team, delivering real-time news experiences to millions of New Zealanders.",
    role: "Contract Technical Lead",
    techStack: ["React", "Node.js", "AWS", "AEM"],
    problem: "TVNZ's flagship news platform needed a modern digital experience to compete with global streaming and social media news sources.",
    impact: "Delivered real-time news experiences to millions of monthly visitors across web and mobile platforms.",
  },
  {
    id: "mercury-website",
    title: "Mercury Website",
    images: [
      "/img/showcases/webp/Mercury-1.webp",
      "/img/showcases/webp/Mercury-2.webp",
    ],
    url: "https://www.mercury.co.nz",
    description: "Built Mercury's public website and integrated energy service APIs for customer-facing platforms.",
    role: "Contract Senior Developer",
    techStack: ["React", "Node.js", "AWS", "Integration"],
    problem: "Mercury needed a modern public-facing website with seamless integration into energy service APIs for customer self-service.",
    impact: "Delivered a unified digital experience connecting website users directly to energy management services.",
  },
  {
    id: "nztd",
    title: "New Zealand Traveller Declaration",
    images: [
      "/img/showcases/webp/NZTD-1.webp",
      "/img/showcases/webp/NZTD-2.webp",
    ],
    url: "https://www.travellerdeclaration.govt.nz/",
    description: "Developed the digital traveller declaration system used by thousands of international visitors.",
    role: "Contract Senior Developer",
    techStack: ["Java", "SpringBoot", "Microservices", "Docker", "Azure", "OCP"],
    problem: "New Zealand needed a digital border declaration system to replace paper forms and streamline international traveller processing.",
    impact: "Built a system processing thousands of traveller declarations daily, enabling digital border clearance.",
  },
  {
    id: "xero",
    title: "XERO Website",
    images: [
      "/img/showcases/webp/Xero-1.webp",
      "/img/showcases/webp/Xero-2.webp",
    ],
    url: "https://www.xero.com/",
    description: "Enhanced Xero's website experience, improving performance and user interface interactions.",
    role: "Contract Senior Developer",
    techStack: ["React", "TypeScript", "UX"],
    problem: "Xero's global website needed performance improvements and refined user interactions to better serve millions of small business users.",
    impact: "Improved page performance metrics and user engagement across key customer-facing pages.",
  },
  {
    id: "sky",
    title: "SKY Website",
    images: [
      "/img/showcases/webp/Sky-1.webp",
      "/img/showcases/webp/Sky-2.webp",
    ],
    url: "https://www.sky.co.nz/",
    description: "Built and maintained SKY TV's public-facing website and service integrations.",
    role: "Senior Developer",
    techStack: ["Java", "Microservices", "AWS", "SpringBoot"],
    problem: "SKY needed a robust public-facing web platform with backend service integrations to support their digital transformation.",
    impact: "Delivered scalable web services and backend integrations for New Zealand's leading pay-TV platform.",
  },

]
