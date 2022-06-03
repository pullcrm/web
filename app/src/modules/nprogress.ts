import NProgress from 'nprogress'

export const install = ({ isClient, router }: any) => {
  if (isClient) {
    router.beforeEach((to: any, from: any) => {
      if (to.path !== from.path)
        NProgress.start()
    })

    router.afterEach(() => { NProgress.done() })
  }
}
