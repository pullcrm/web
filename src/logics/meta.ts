function getOpenGraph(seo: any) {
  return [
    seo.value.metaImage && (
      { vhid: 'og:image', property: 'og:image', content: `https://${import.meta.env.VITE_SITE_HOSTNAME}${seo.value.metaImage.url}` }
    ),
  ]
}

export function prepareMeta(seo: any) {
  const route = useRoute()

  return {
    title: computed(() => seo.value.metaTitle || SITE_NAME),
    meta: computed(() => ([
      seo.value.metaRobots && (
        { hid: 'robots', name: 'robots', content: seo.value.metaRobots }
      ),
      seo.value.metaDescription && (
        { name: 'description', content: seo.value.metaDescription }
      ),
      ...getOpenGraph(seo),
    ].filter(Boolean))),
    link: computed(() => ([
      { rel: 'canonical', href: seo.value.canonicalURL || `https://${import.meta.env.VITE_SITE_HOSTNAME}${route.path}` },
    ].filter(Boolean))),
    script: [
      seo.value.structuredData && ({
        type: 'application/ld+json',
        children: JSON.stringify(seo.value.structuredData),
      }),
    ].filter(Boolean),
  }
}
