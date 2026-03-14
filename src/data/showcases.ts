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
    ],
    url: "https://www.tvnz.co.nz/one-news",
  },
  {
    id: "ember-material-table",
    title: "Ember Material Table",
    images: ["/img/showcases/ember-material-table.png"],
    url: "https://enkru.github.io/ember-material-table",
  },
]
