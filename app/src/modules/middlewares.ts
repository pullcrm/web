import type { context } from '~/types'

export const install = (ctx: context) => {
  const middlewares = import.meta.globEager('../middleware/*.ts')

  ctx.router.beforeEach(async (to: any, from: any, next: any) => {
    if (!!to.meta.state && Object.keys(to.meta.state).length > 0)
      return next()

    for (const key in middlewares)
      await middlewares[key].default({ from, to, next }, ctx)

    next()
  })
}
