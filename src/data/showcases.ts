export interface Showcase {
  id: string
  title: string
  images: string[]
  url: string
  description?: string
}

export const showcases: Showcase[] = [
  {
    id: "tvnz-one-news",
    title: "TVNZ One News",
    images: [
      "/img/showcases/1News-1.png",
      "/img/showcases/1News-2.png",
      "/img/showcases/1News-3.png",
    ],
    url: "https://1news.co.nz",
    description: "Led the One News digital team, delivering real-time news experiences to millions of New Zealanders.",
  },
  {
    id: "mercury-website",
    title: "Mercury Website",
    images: [
      "/img/showcases/Mercury-1.png",
      "/img/showcases/Mercury-2.png",
    ],
    url: "https://www.mercury.co.nz",
    description: "Built Mercury's public website and integrated energy service APIs for customer-facing platforms.",
  },
  {
    id: "nztd",
    title: "New Zealand Traveller Declaration",
    images: [
      "/img/showcases/NZTD-1.png",
      "/img/showcases/NZTD-2.png",
    ],
    url: "https://www.travellerdeclaration.govt.nz/",
    description: "Developed the digital traveller declaration system used by thousands of international visitors.",
  },
  {
    id: "xero",
    title: "XERO Website",
    images: [
      "/img/showcases/Xero-1.png",
      "/img/showcases/Xero-2.png",
    ],
    url: "https://www.xero.com/",
    description: "Enhanced Xero's website experience, improving performance and user interface interactions.",
  },
  {
    id: "sky",
    title: "SKY Website",
    images: [
      "/img/showcases/Sky-1.png",
      "/img/showcases/Sky-2.png",
    ],
    url: "https://www.sky.co.nz/",
    description: "Built and maintained SKY TV's public-facing website and service integrations.",
  },
  {
    id: "ember-material-table",
    title: "Ember Material Table",
    images: ["/img/showcases/ember-material-table.png"],
    url: "https://enkru.github.io/ember-material-table",
    description: "Open-source Material Design data table component for Ember.js with sorting, pagination and filtering.",
  },
]
