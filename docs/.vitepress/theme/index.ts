// https://vitepress.vuejs.org/guide/theming.html#extending-the-default-theme
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/layout.css'
import 'vitepress/dist/client/theme-default/styles/code.css'
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css'
import 'vitepress/dist/client/theme-default/styles/sidebar-links.css'

import '../scss/index.scss'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const UiKit = import.meta.globEager('../ui/**/*.vue')

    for (const key in UiKit) {
      const name = key.split('/').pop().replace('.vue', '')

      app.component(`Ui${name}`, UiKit[key].default)
    }
  },
}
