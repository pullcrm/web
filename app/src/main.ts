import '~/scss/index.scss'

import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from './routes'
import App from './App.vue'
import { api } from './composables/api'

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

    // Before each route navigation we request the data needed for showing the page.
    router.beforeEach(async (to: any, from: any, next: any) => {
      if (!!to.meta.state && Object.keys(to.meta.state).length > 0) {
        // This route has state already (from server) so it can be reused.
        // State is always empty in SPA development, but present in SSR development.
        return next()
      }

      try {
        const { data } = await api.strapi.page(to.path, { populate: 'deep,3' })

        to.meta.state = { server: true, pageData: data }
      }
      catch (error) {
        console.error(error)
        // redirect to error route
      }

      next()
    })

    return { head }
  },
)
