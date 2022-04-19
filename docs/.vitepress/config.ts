import path from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'uk-UA',
  title: 'Pullcrm',
  // title: 'Облік клієнтів та онлайн запис - pullcrm',
  description: 'Pullcrm - зручний інструмент автоматизації запису для вашої компанії. Онлайн запис для: ✅Барбершопу ✅Салону краси ✅Тату салону ✅Медичного центру ✅Стоматології.',

  base: '/',
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/static/logo_ua.svg',
    docsDir: 'docs',
    nav: [
      {
        text: 'Головна',
        link: '/',
      },
      {
        text: 'Faq',
        link: '/faq/',
      },
      {
        text: 'Документи',
        link: '/documents/',
      },
      // {
      //   text: 'Telegram',
      //   link: 'https://t.me/pullcrm',
      //   target: '_blank',
      // }
    ],
    editLinks: false,
    lastUpdated: true,
    prevLinks: true,
    nextLinks: true,

    sidebar: {
      '/faq/': getGuideSidebar(),
      '/documents/': getDocumentsSidebar(),
      '/': getGuideSidebar(),
    },
  },

  vite: {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, './')}/`,
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
  },
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/faq/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress',
        },
      ],
    },
  ]
}

function getDocumentsSidebar() {
  return [
    {
      text: 'Документи',
      children: [
        { text: 'Basics', link: '/documents/' },
        { text: 'Повернення коштів', link: '/documents/money-return' },
      ],
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/documents/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' },
      ],
    },
  ]
}
