import { api } from '../composables/api'
import type { IStrapiPageParams } from '~/services/api'

const PAGE_SIZE = 8

export async function onFetch(query: string | null, route: any) {
  const { slug } = route.params || {}
  const { page } = route.query

  const options: IStrapiPageParams = {
    'model': 'article',
    'populate': 'deep,3',
    'sort': 'id:desc',
    'pagination[page]': Number(page || 1),
    'pagination[pageSize]': PAGE_SIZE,
  }

  if (query)
    options._q = String(query)

  if (slug) {
    options.categoryKey = 'category'
    options.category = slug
  }

  return api.strapi.category(options)
}

export default async function ({ next, to }: any, { writeResponse }: any) {
  if (['blog', 'blog-category'].includes(to.name) === false)
    return

  try {
    const { data, meta } = await onFetch(to.query.q, to)

    to.meta.state = {
      ...to.meta.state,
      items: data,
      pagination: meta.pagination,
    }
  }
  catch (err: any) {
    if (import.meta.env.SSR) {
      writeResponse({
        status: err.status,
      })
    }

    next({ name: '404' })
  }
}
