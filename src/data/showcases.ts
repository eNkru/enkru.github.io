export interface Showcase {
  id: string
  title: string
  images: string[]
  url: string
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
  },
  {
    id: "mercury-website",
    title: "Mercury Website",
    images: [
      "/img/showcases/Mercury-1.png",
      "/img/showcases/Mercury-2.png",
    ],
    url: "https://www.mercury.co.nz",
  },
  {
    id: "nztd",
    title: "New Zealand Traveller Declaration",
    images: [
      "/img/showcases/NZTD-1.png",
      "/img/showcases/NZTD-2.png",
    ],
    url: "https://www.travellerdeclaration.govt.nz/",
  },
  {
    id: "xero",
    title: "XERO Website",
    images: [
      "/img/showcases/Xero-1.png",
      "/img/showcases/Xero-2.png",
    ],
    url: "https://www.xero.com/",
  },
  {
    id: "sky",
    title: "SKY Website",
    images: [
      "/img/showcases/Sky-1.png",
      "/img/showcases/Sky-2.png",
    ],
    url: "https://www.xero.com/",
  },
  {
    id: "ember-material-table",
    title: "Ember Material Table",
    images: ["/img/showcases/ember-material-table.png"],
    url: "https://enkru.github.io/ember-material-table",
  },
]
