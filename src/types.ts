import type { SharedContext } from 'vite-ssr/utils/types'

export type context = SharedContext & {
  app: any
  router: any
  initialRoute: any
}
