export interface IStrapiPageParams {
  populate?: string
}

export const factory = (send: any) => ({
  strapi: {
    page(path: string, params?: IStrapiPageParams): Promise<any> {
      return send(path, params, 'GET')
    },

    pages(category: string, params?: IStrapiPageParams): Promise<any> {
      return send(`/category/${category}`, params, 'GET')
    },
  },
})
