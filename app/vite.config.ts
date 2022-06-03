import path from 'path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteSSR from 'vite-ssr/plugin.js'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  server: {
    fs: {
      // The API logic is in outside of the project
      strict: false,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import '~/scss/_mixins.scss';
            @import '~/scss/_variables.scss';
          `,
      },
    },
  },

  plugins: [
    ViteSSR(),

    Vue(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/constants',
        // 'src/composables',
        // 'src/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
  ],
})
