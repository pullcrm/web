import { api } from '../composables/api'

export default async function ({ to }: any) {
  if (!import.meta.env.SSR)
    return

  const { data } = await api.strapi.category({
    populate: 'deep,0',
    model: 'document-page',
  })

  to.meta.state = {
    ...to.meta.state,
    footerDocuments: data,
  }
}
