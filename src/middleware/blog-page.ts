import { api } from '../composables/api'
import type { IStrapiPageParams } from '~/services/api'

export async function onFetch(query: string | null, route: any) {
  const { slug } = route.params || {}

  const options: IStrapiPageParams = {
    model: 'article',
    populate: 'deep,3',
  }

  if (query)
    options._q = String(query)

  if (slug) {
    options.categoryKey = 'category'
    options.category = slug
  }

  try {
    const { data } = await api.strapi.category(options)

    return data
  }
  catch {
    return []
  }
}

export default async function ({ to }: any) {
  if (['blog', 'blog-category'].includes(to.name) === false)
    return

  const result = await onFetch(to.query.q, to)

  to.meta.state = {
    ...to.meta.state,
    items: result,
  }
}
