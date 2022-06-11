import { api } from '../composables/api'
import type { IStrapiPageParams } from '~/services/api'

export function onFetch(query: string | null) {
  const options: IStrapiPageParams = { populate: 'deep,2' }

  if (query)
    options._q = String(query)

  return api.strapi.category('/faq-page/', options)
}

export default async function ({ to }: any) {
  if (['faq'].includes(to.name) === false)
    return

  const { data } = await onFetch(to.query.q)

  to.meta.state = {
    ...to.meta.state,
    items: data,
  }
}
