import '~/scss/index.scss'

import viteSSR from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from './routes'
import App from './App.vue'
import type { context } from './types'

const normalizeRoutes = routes.map((route) => {
  return { ...route, pathToRegexpOptions: { strict: true } }
})

export default viteSSR(
  App,
  { routes: setupLayouts(normalizeRoutes) },
  (ctx: context) => {
    const head = createHead()

    ctx.app.use(head)

    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))

    return { head }
  },
)
