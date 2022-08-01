import { api } from '../composables/api'

export default async function ({ next, to }: any, { writeResponse }: any) {
  if (['faq-page', 'document-page', 'page', 'article', 'articles-category'].includes(to.meta.model) === false)
    return

  try {
    const { data } = await api.strapi.page({
      model: to.meta.model,
      slug: to.params.slug || to.name,
      category: to.params.category,
      categoryKey: to.meta.categoryKey,
      populate: 'deep,3',
    })

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
