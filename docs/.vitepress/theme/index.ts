// https://vitepress.vuejs.org/guide/theming.html#extending-the-default-theme
import DefaultTheme from 'vitepress/theme'
import '../scss/index.scss'

// @ts-ignore
import ThemeLayout from './Layout.vue'

// @ts-ignore
const UiKit = import.meta.glob('../ui/**/*.vue')
const UiKitComponents = {}

for (const key in UiKit) {
  const name = key.split("/").pop().replace('.vue', '')

  UiKitComponents[name] = await UiKit[key]().then(module => module.default ?? module)
}

export default {
  ...DefaultTheme,
  Layout: ThemeLayout,
  enhanceApp ({ app }) {
    for (const name in UiKitComponents) {
      app.component('Ui' + name, UiKitComponents[name])
    }
  }
}