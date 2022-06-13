import NProgress from 'nprogress'
import type { context } from '~/types'

export const install = ({ isClient, router }: context) => {
  router.beforeEach((to: any, from: any) => {
    if (isClient && to.path !== from.path)
      NProgress.start()
  })

  router.afterEach(() => {
    if (isClient)
      NProgress.done()
  })
}
