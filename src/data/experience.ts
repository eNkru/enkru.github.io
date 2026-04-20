export interface ExperienceEntry {
  id: string
  cover: string
  logo: string
  title: string
  role: string
  period: string
  description: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "uoa",
    cover: "/img/experience/uoa_cover.png",
    logo: "/img/experience/uoalogo.png",
    title: "University of Auckland",
    role: "BSc, Computer Science and Information Systems",
    period: "2005 – 2007",
    description: "Studied at New Zealand's leading university.",
    tags: ["Computer Science", "Information Systems"],
  },
  {
    id: "kiwiplan",
    cover: "/img/experience/kiwiplan_cover.png",
    logo: "/img/experience/kplogo.png",
    title: "Kiwiplan",
    role: "Developer and Analyst",
    period: "2007 – 2011",
    description:
      "Worked in a team to deliver quality management software to the corrugated industry and provided Data Warehouse / ETL reports to the business.",
    tags: ["Java", "Data Warehouse", "ETL", "SQL"],
  },
  {
    id: "propellerhead",
    cover: "/img/experience/propellerhead_cover.png",
    logo: "/img/experience/phlogo.png",
    title: "Propellerhead",
    role: "Software Developer",
    period: "2011 – 2012",
    description:
      "Worked as a consultant providing solutions to well-known NZ companies including Fonterra, NZ Post, and Auckland Transport.",
    tags: ["Java", ".NET", "Consulting", "Integration"],
  },
  {
    id: "skytv",
    cover: "/img/experience/skytv_cover.png",
    logo: "/img/experience/skylogo.png",
    title: "SKYTV",
    role: "Senior Developer",
    period: "2012 – 2017",
    description:
      "Grew quickly to senior level. Responsible for many back-end / integration services in the organisation. Led the dev team for several projects.",
    tags: ["Java", "Microservices", "AWS", "Team Lead"],
  },
  {
    id: "tvnz",
    cover: "/img/experience/tvnz_cover.png",
    logo: "/img/experience/tvnzlogo.png",
    title: "TVNZ",
    role: "Contract Technical Lead",
    period: "2017 – 2020",
    description:
      "Led the One News digital team development, delivering real-time news experiences. Supported other teams with deep platform expertise.",
    tags: ["React", "Node.js", "AWS Lambda", "Video Streaming"],
  },
  {
    id: "mercury",
    cover: "/img/experience/mercury_cover.png",
    logo: "/img/experience/mercurylogo.png",
    title: "Mercury",
    role: "Contract Senior Developer",
    period: "2020 – 2021",
    description: "Built Mercury's public website and integrated energy service APIs for customer-facing platforms.",
    tags: ["React", "REST APIs", "Integration", "AEM"],
  },
  {
    id: "nzcustoms",
    cover: "/img/experience/nzcustoms_cover.png",
    logo: "/img/experience/nzcustomslogo.png",
    title: "NZ Customs",
    role: "Contract Senior Developer",
    period: "2021 – 2024",
    description: "Developed the NZ Traveller Declaration system and trade facilitation platforms, supporting digital border processes.",
    tags: ["Java", "Spring Boot", "Microservices", "Docker"],
  },
  {
    id: "xero",
    cover: "/img/experience/xero_cover.png",
    logo: "/img/experience/xerologo.png",
    title: "Xero",
    role: "Contract Senior Developer",
    period: "2024 – 2025",
    description: "Enhanced Xero's website for improved user experiences, focusing on performance and interface interactions.",
    tags: ["React", "TypeScript", "UX", "Performance"],
  },

]
