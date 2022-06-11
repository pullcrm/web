export interface IStrapiPageParams {
  populate?: string | object
  fields?: string
  _q?: string
}

export const factory = (send: any) => ({
  strapi: {
    page(path: string, params?: IStrapiPageParams): Promise<any> {
      return send(path, params, 'GET')
    },

    category(path: string, params?: IStrapiPageParams): Promise<any> {
      return send(`/category${path}`, params, 'GET')
    },
  },
})
