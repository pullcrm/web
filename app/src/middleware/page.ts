import { api } from '../composables/api'

export default async function ({ to }: any) {
  if (['faq-page', 'document-page', 'page'].includes(to.meta.model) === false)
    return

  try {
    const path = [to.meta.model, to.params.catchAll].filter(Boolean).join('/')

    const { data } = await api.strapi.page(`/${path}`, { populate: 'deep,3' })

    to.meta.state = {
      ...to.meta.state,
      server: true,
      pageData: data,
    }
  }
  catch (error) {
    console.error(error)
    // redirect to error route
  }
}
