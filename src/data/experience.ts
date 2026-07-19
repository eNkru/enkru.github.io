export interface ExperienceEntry {
  id: string
  logo: string
  title: string
  role: string
  period: string
  description: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "skytv2",
    logo: "/img/experience/skylogo.png",
    title: "SKYTV",
    role: "Contract Senior Developer",
    period: "2025 – Present",
    description:
      "Contracted with the Metadata and Curation team to design and deliver integration platform services for content workflows.",
    tags: ["Java", "SpringBoot", "Spring Reactive", "Docker", "AI"],
  },
  {
    id: "xero",
    logo: "/img/experience/xerologo.png",
    title: "Xero",
    role: "Contract Senior Developer",
    period: "2024 – 2025",
    description:
      "Contracted on Xero's public website, improving performance and interaction quality across customer-facing pages.",
    tags: ["React", "TypeScript", "UX", "AI"],
  },
  {
    id: "nzcustoms",
    logo: "/img/experience/nzcustomslogo.png",
    title: "NZ Customs",
    role: "Contract Senior Developer",
    period: "2021 – 2024",
    description:
      "Delivered core services for the NZ Traveller Declaration and trade facilitation platforms that support digital border processes.",
    tags: ["Java", "SpringBoot", "Microservices", "Docker", "Azure", "OCP"],
  },
  {
    id: "mercury",
    logo: "/img/experience/mercurylogo.png",
    title: "Mercury",
    role: "Contract Senior Developer",
    period: "2020 – 2021",
    description:
      "Delivered Mercury's public website and energy service API integrations for customer-facing digital platforms.",
    tags: ["React", "NodeJS", "Integration", "AWS"],
  },
  {
    id: "tvnz",
    logo: "/img/experience/tvnzlogo.png",
    title: "TVNZ",
    role: "Contract Technical Lead",
    period: "2017 – 2020",
    description:
      "Led the One News digital engineering team, shipping real-time news experiences and advising peer teams on platform architecture.",
    tags: ["Tech Lead", "Java", "React", "NodeJS", "AWS", "AEM"],
  },
  {
    id: "skytv",
    logo: "/img/experience/skylogo.png",
    title: "SKYTV",
    role: "Senior Developer",
    period: "2012 – 2017",
    description:
      "Progressed to senior developer; owned backend and integration services across the organisation and led delivery on multiple projects.",
    tags: ["Java", "Microservices", "AWS", "SpringBoot"],
  },
  {
    id: "propellerhead",
    logo: "/img/experience/phlogo.png",
    title: "Propellerhead",
    role: "Software Developer",
    period: "2011 – 2012",
    description:
      "Consulting engagements delivering software solutions for NZ enterprises including Fonterra, NZ Post, and Auckland Transport.",
    tags: ["Java", ".NET", "Consulting", "Integration"],
  },
  {
    id: "kiwiplan",
    logo: "/img/experience/kplogo.png",
    title: "Kiwiplan",
    role: "Developer and Analyst",
    period: "2007 – 2011",
    description:
      "Built quality management software for the corrugated industry and delivered Data Warehouse / ETL reporting for the business.",
    tags: ["Java", "Data Warehouse", "ETL", "SQL"],
  },
  {
    id: "uoa",
    logo: "/img/experience/uoalogo.png",
    title: "University of Auckland",
    role: "BSc, Computer Science and Information Systems",
    period: "2005 – 2007",
    description: "Computer Science and Information Systems studies at New Zealand's leading university.",
    tags: ["Computer Science", "Information Systems"],
  },
]
