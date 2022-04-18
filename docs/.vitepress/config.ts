import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pullcrm',
  description: 'Just playing around.',
  base: '/',
  lang: 'uk-UA',
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/static/logo_ua.svg',
    docsDir: "docs",
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
        text: 'Telegram',
        link: 'https://t.me/pullcrm',
        target: '_blank', 
      }
    ],
    editLinks: false,
    lastUpdated: true,
    prevLinks: true,
    nextLinks: true,

    sidebar: {
      '/faq/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
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
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
