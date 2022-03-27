import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pullcrm',
  description: 'Just playing around.',
  base: '/faq/',
  lang: 'uk-UA',

  themeConfig: {
    logo: '/assets/logo_ua.svg',
    nav: [
      {
        text: 'Головна',
        link: '/',
      },
      {
        text: 'Telegram',
        link: 'https://t.me/pullcrm',
        target: '_blank', 
      },
      {
        text: 'Увійти',
        link: 'https://pullcrm.com/login/',
        target: '_self',
      },
      {
        text: 'Реєстрація',
        link: 'https://pullcrm.com/registration/',
        target: '_self',
      }
    ],
    editLinks: false,
    lastUpdated: true,
    prevLinks: true,
    nextLinks: true,
  }
})
