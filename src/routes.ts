const routes = [
  {
    path: '/',
    component: () => import('./pages/HomePage/HomePage.vue'),
    name: 'index',
    meta: { model: 'page' },
  },
  {
    path: '/contacts/',
    component: () => import('./pages/ContactsPage/ContactsPage.vue'),
    name: 'contacts',
    meta: { model: 'page' },
  },

  {
    path: '/documents/:slug/',
    name: 'documentChild',
    component: () => import('./pages/DocumentPage/_child.vue'),
    meta: { model: 'document-page' },
  },

  {
    path: '/blog/',
    name: 'blog',
    component: () => import('./pages/BlogPage/BlogPage.vue'),
    meta: { model: 'page' },
  },
  {
    path: '/blog/:slug/',
    name: 'blog-category',
    component: () => import('./pages/BlogPage/BlogPage.vue'),
    meta: { model: 'articles-category' },
  },
  {
    path: '/blog/:category/:slug/',
    name: 'blogChild',
    component: () => import('./pages/BlogPage/_child.vue'),
    meta: { model: 'article', categoryKey: 'category' },
  },

  {
    path: '/faq/',
    name: 'faq',
    component: () => import('./pages/FaqPage/FaqPage.vue'),
    meta: { model: 'page' },
  },
  {
    path: '/faq/:slug/',
    name: 'faqChild',
    component: () => import('./pages/FaqPage/_child.vue'),
    meta: { model: 'faq-page' },
  },

  // 404 page
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('./pages/NotFound/NotFound.vue'),
  },
]

export { routes }
