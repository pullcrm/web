import { api } from '../composables/api'

export default async function ({ to }: any) {
  if (!import.meta.env.SSR)
    return

  const { data } = await api.strapi.category('/document-page/', { populate: 'deep,0' })

  to.meta.state = {
    ...to.meta.state,
    footerDocuments: data,
  }
}
