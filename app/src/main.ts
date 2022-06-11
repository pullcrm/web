import '~/scss/index.scss'

import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from './routes'
import App from './App.vue'

export default viteSSR(
  App,
  {
    routes: setupLayouts(routes),
  },
  ({ app, router }) => {
    // { app, router, isClient, url, initialState, initialRoute, request, response }
    const head = createHead()
    app.use(head)

    app.component(ClientOnly.name, ClientOnly)

    const UiKit = import.meta.globEager('./ui/**/*.vue')

    for (const key in UiKit) {
      const name = key.split('/').pop()?.replace('.vue', '')

      app.component(`Ui${name}`, UiKit[key].default)
    }

    const middlewares = import.meta.globEager('./middleware/*.ts')

    router.beforeEach(async (to: any, from: any, next: any) => {
      if (!!to.meta.state && Object.keys(to.meta.state).length > 0)
        return next()

      for (const key in middlewares)
        await middlewares[key].default({ from, to, next })

      next()
    })

    return { head }
  },
)
