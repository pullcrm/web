import { ClientOnly } from 'vite-ssr'
import type { context } from '~/types'

export const install = ({ app }: context) => {
  app.component(ClientOnly.name, ClientOnly)

  const UiKit = import.meta.globEager('../ui/**/*.vue')

  for (const key in UiKit) {
    const name = key.split('/').pop()?.replace('.vue', '')

    app.component(`Ui${name}`, UiKit[key].default)
  }
}
