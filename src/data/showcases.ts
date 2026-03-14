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
      "/img/showcases/1nn-interactive-1.png",
      "/img/showcases/1nn-interactive-credit.png",
      "/img/showcases/one-news-1.png",
      "/img/showcases/one-news-2.png",
    ],
    url: "https://www.tvnz.co.nz/one-news",
  },
  {
    id: "freelook",
    title: "Freelook",
    images: ["/img/showcases/freelook.png"],
    url: "https://electronjs.org/apps/freelook",
  },
  {
    id: "usecret",
    title: "USECRET ONLINE",
    images: ["/img/showcases/usecret.png"],
    url: "http://usecret.nz",
  },
  {
    id: "media-dashboard",
    title: "Media Dashboard",
    images: [
      "/img/showcases/MediaOpsLogin.png",
      "/img/showcases/MediaOpsChannelSelectView.png",
    ],
    url: "",
  },
  {
    id: "ember-material-table",
    title: "Ember Material Table",
    images: ["/img/showcases/emberMaterialTable.png"],
    url: "https://enkru.github.io/ember-material-table",
  },
  {
    id: "happygo",
    title: "HAPPYGO ONLINE",
    images: [
      "/img/showcases/HGOrder1.png",
      "/img/showcases/HGOrder2.png",
    ],
    url: "",
  },
]
