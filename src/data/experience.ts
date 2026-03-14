export interface ExperienceEntry {
  id: string
  cover: string
  logo: string
  title: string
  role: string
  period: string
  description: string
}

export const experience: ExperienceEntry[] = [
  {
    id: "tvnz",
    cover: "/img/tvnz_cover.png",
    logo: "/img/tvnzlogo.png",
    title: "TVNZ",
    role: "Contract Technical Lead",
    period: "April 2017 – Present",
    description:
      "Leads One News team development. Support other teams with my experiences.",
  },
  {
    id: "skytv",
    cover: "/img/skytv_cover.png",
    logo: "/img/skylogo.png",
    title: "SKYTV",
    role: "Senior Developer",
    period: "September 2012 – April 2017 (4 years 8 months)",
    description:
      "Grew quickly to senior level. Responsible for many back-end / integration services in the organisation. Led the dev team for several projects.",
  },
  {
    id: "propellerhead",
    cover: "/img/propellerhead_cover.png",
    logo: "/img/phlogo.png",
    title: "Propellerhead",
    role: "Software Developer",
    period: "May 2011 – September 2012 (1 year 5 months)",
    description:
      "Worked as a consultant providing solutions to well-known NZ companies including Fonterra, NZ Post, and Auckland Transport.",
  },
  {
    id: "kiwiplan",
    cover: "/img/kiwiplan_cover.png",
    logo: "/img/kplogo.png",
    title: "Kiwiplan",
    role: "Developer and Analyst",
    period: "January 2008 – May 2011 (3 years 5 months)",
    description:
      "Worked in a team to deliver quality management software to the corrugated industry and provided Data Warehouse / ETL reports to the business.",
  },
  {
    id: "uoa",
    cover: "/img/uoa_cover.png",
    logo: "/img/uoalogo.png",
    title: "University of Auckland",
    role: "BSc, Computer Science and Information Systems",
    period: "March 2005 – November 2007 (3 years)",
    description: "Studied at New Zealand's leading university.",
  },
]
