export interface IStrapiPageParams {
  model?: string
  slug?: string | null
  category?: string
  categoryKey?: string
  populate?: string | object
  fields?: string
  _q?: string
}

export const factory = (send: any) => ({
  strapi: {
    page(params?: IStrapiPageParams): Promise<any> {
      return send('/page', params, 'GET')
    },

    category(params?: IStrapiPageParams): Promise<any> {
      return send('/items', params, 'GET')
    },
  },
})
