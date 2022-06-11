const routes = [
  {
    path: '/',
    component: () => import('./pages/HomePage/HomePage.vue'),
    name: 'home',
    meta: { model: 'page' },
  },
  {
    path: '/contacts/',
    component: () => import('./pages/ContactsPage/ContactsPage.vue'),
    name: 'contacts',
    meta: { model: 'page' },
  },
  {
    path: '/documents/',
    redirect: '/documents/policy/',
  },
  {
    path: '/documents/:slug(.*)',
    name: 'documentChild',
    component: () => import('./pages/DocumentPage/_child.vue'),
    meta: { model: 'document-page' },
  },
  {
    path: '/faq/',
    name: 'faq',
    component: () => import('./pages/FaqPage/FaqPage.vue'),
    meta: { model: 'page' },
  },
  {
    path: '/faq/:slug(.*)',
    name: 'faqChild',
    component: () => import('./pages/FaqPage/_child.vue'),
    meta: { model: 'faq-page' },
  },

  // Dynamic page
  {
    path: '/:slug(.*)',
    name: 'dynamic-page',
    component: () => import('./pages/DynamicPage/_child.vue'),
    meta: { model: 'page' },
  },

  // 404 page
  {
    path: '/404',
    name: '404',
    component: () => import('./pages/NotFound/NotFound.vue'),
  },
]

export { routes }
