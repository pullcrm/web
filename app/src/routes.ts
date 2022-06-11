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
    path: '/documents/:catchAll(.*)',
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
    path: '/faq/:catchAll(.*)',
    name: 'faqChild',
    component: () => import('./pages/FaqPage/_child.vue'),
    meta: { model: 'faq-page' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('./pages/NotFound/NotFound.vue'),
    meta: { model: 'page' },
  },
]

export { routes }
