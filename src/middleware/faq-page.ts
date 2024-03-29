import { api } from '../composables/api'
import type { IStrapiPageParams } from '~/services/api'

export async function onFetch(query: string | null) {
  const options: IStrapiPageParams = {
    model: 'faq-page',
    populate: 'deep,2',
  }

  if (query)
    options._q = String(query)

  try {
    const { data } = await api.strapi.category(options)

    return data
  }
  catch {
    return []
  }
}

export default async function ({ to }: any) {
  if (['faq'].includes(to.name) === false)
    return

  const result = await onFetch(to.query.q)

  to.meta.state = {
    ...to.meta.state,
    items: result,
  }
}
