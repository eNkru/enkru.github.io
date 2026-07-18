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
    description:
      "Led the One News digital team, delivering real-time news experiences for TVNZ's flagship news brand.",
    role: "Contract Technical Lead",
    techStack: ["React", "Node.js", "AWS", "AEM"],
    problem:
      "TVNZ's flagship news platform needed a modern digital experience to keep pace with streaming and social news sources.",
    impact: "Shipped real-time news experiences across web and mobile for TVNZ's flagship digital news brand.",
  },
  {
    id: "mercury-website",
    title: "Mercury Website",
    images: [
      "/img/showcases/webp/Mercury-1.webp",
      "/img/showcases/webp/Mercury-2.webp",
    ],
    url: "https://www.mercury.co.nz",
    description:
      "Built Mercury's public website and integrated energy service APIs for customer-facing platforms.",
    role: "Contract Senior Developer",
    techStack: ["React", "Node.js", "AWS", "Integration"],
    problem:
      "Mercury needed a modern public website with seamless integration into energy service APIs for customer self-service.",
    impact: "Delivered a unified digital experience connecting website users to energy management services.",
  },
  {
    id: "nztd",
    title: "New Zealand Traveller Declaration",
    images: [
      "/img/showcases/webp/NZTD-1.webp",
      "/img/showcases/webp/NZTD-2.webp",
    ],
    url: "https://www.travellerdeclaration.govt.nz/",
    description:
      "Developed the digital traveller declaration system used by international visitors entering New Zealand.",
    role: "Contract Senior Developer",
    techStack: ["Java", "SpringBoot", "Microservices", "Docker", "Azure", "OCP"],
    problem:
      "New Zealand needed a digital border declaration system to replace paper forms and streamline traveller processing.",
    impact:
      "Delivered digital border declaration capabilities that replaced paper forms for international travellers.",
  },
  {
    id: "xero",
    title: "XERO Website",
    images: [
      "/img/showcases/webp/Xero-1.webp",
      "/img/showcases/webp/Xero-2.webp",
    ],
    url: "https://www.xero.com/",
    description:
      "Enhanced Xero's website experience, improving performance and user interface interactions.",
    role: "Contract Senior Developer",
    techStack: ["React", "TypeScript", "UX"],
    problem:
      "Xero's global website needed performance and interaction refinements on key customer-facing pages.",
    impact: "Improved performance and interaction quality on priority customer-facing pages.",
  },
  {
    id: "sky",
    title: "SKY Website",
    images: [
      "/img/showcases/webp/Sky-1.webp",
      "/img/showcases/webp/Sky-2.webp",
    ],
    url: "https://www.sky.co.nz/",
    description:
      "Built and maintained SKY TV's public-facing website and service integrations.",
    role: "Senior Developer",
    techStack: ["Java", "Microservices", "AWS", "SpringBoot"],
    problem:
      "SKY needed a robust public web platform with backend service integrations to support digital transformation.",
    impact: "Delivered scalable web services and backend integrations for New Zealand's leading pay-TV platform.",
  },
]
