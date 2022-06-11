export function prepareMeta(seo: any) {
  return {
    title: computed(() => seo.value.metaTitle || SITE_NAME),
    meta: computed(() => ([
      seo.value.metaDescription && { name: 'description', content: seo.value.metaDescription },
    ].filter(Boolean))),
    link: computed(() => ([
      { rel: 'icon', type: 'image/x-icon', href: '/static/logo-rounded.svg' },
      seo.value.canonical && { rel: 'canonical', href: seo.value.canonical },
    ].filter(Boolean))),
  }
}
