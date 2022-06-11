import { api } from '../composables/api'

export default async function ({ next, to }: any, ctx: any) {
  const { writeResponse } = ctx

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
  catch (err: any) {
    if (import.meta.env.SSR) {
      writeResponse({
        status: err.status,
      })
    }

    next({ name: '404' })
  }
}
