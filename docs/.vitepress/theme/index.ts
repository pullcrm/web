// https://vitepress.vuejs.org/guide/theming.html#extending-the-default-theme
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/layout.css';
import 'vitepress/dist/client/theme-default/styles/code.css';
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css';
import 'vitepress/dist/client/theme-default/styles/sidebar-links.css';

import '../scss/index.scss'

// @ts-ignore
import Layout from './Layout.vue'
// @ts-ignore
import NotFound from './NotFound.vue'

// @ts-ignore
const UiKit = import.meta.glob('../ui/**/*.vue')
const UiKitComponents = {}

for (const key in UiKit) {
  const name = key.split("/").pop().replace('.vue', '')

  UiKitComponents[name] = await UiKit[key]().then(module => module.default ?? module)
}

export default {
  Layout,
  NotFound,
  enhanceApp ({ app }) {
    for (const name in UiKitComponents) {
      app.component('Ui' + name, UiKitComponents[name])
    }
  }
}