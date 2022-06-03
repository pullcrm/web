const routes = [
  {
    path: '/',
    component: () => import('./pages/HomePage/HomePage.vue'),
    name: 'home',
  },
  {
    path: '/contacts/',
    component: () => import('./pages/ContactsPage/ContactsPage.vue'),
    name: 'contacts',
  },
  {
    path: '/documents/',
    redirect: '/documents/policy/',
  },
  {
    path: '/documents/:catchAll(.*)',
    name: 'documentChild',
    component: () => import('./pages/DocumentPage/_child.vue'),
  },
  {
    path: '/faq/',
    name: 'faq',
    component: () => import('./pages/FaqPage/FaqPage.vue'),
  },
  {
    path: '/faq/:catchAll(.*)',
    name: 'faqChild',
    component: () => import('./pages/FaqPage/_child.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('./pages/NotFound/NotFound.vue'),
  },
]

export { routes }
