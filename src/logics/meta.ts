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
    title: computed(() => seo.value.metaTitle || SEO_TITLE_DEFAULT),
    meta: computed(() => ([
      { name: 'description', content: seo.value.metaDescription || SEO_DESCRIPTION_DEFAULT },

      seo.value.metaRobots && (
        { hid: 'robots', name: 'robots', content: seo.value.metaRobots }
      ),

      ...getOpenGraph(seo),
    ].filter(Boolean))),
    link: computed(() => ([
      { rel: 'canonical', href: seo.value.canonicalURL || `https://${import.meta.env.VITE_SITE_HOSTNAME}${route.path}` },
    ].filter(Boolean))),
    script: computed(() => ([
      seo.value.structuredData && ({
        type: 'application/ld+json',
        children: JSON.stringify(seo.value.structuredData),
      }),
    ].filter(Boolean))),
  }
}
