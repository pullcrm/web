export interface IFaqItem {
  id: number
  title: string
  slug: string
  seo?: any
  updatedAt: string
}

export interface IBlogItem {
  id: number
  title: string
  slug: string
  seo?: any
  content: string
  category: any | null
  updatedAt: string
}
