<script lang="ts" setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'
import Logger from '~/components/Logger/Logger.vue'
import { api } from '~/composables/api'

const route = useRoute()
const attrs = useAttrs()

const hasLogger = computed(() => {
  return route.query.__logger === '1'
})

const { data: documents } = await api.strapi.category('/document-page/', { populate: 'deep,0' })

const seo = computed(() => {
  return (attrs.pageData as any)?.seo ?? {}
})

useHead({
  title: computed(() => seo.value.metaTitle || SITE_NAME),
  meta: computed(() => ([
    seo.value.metaDescription && { name: 'description', content: seo.value.metaDescription },
  ].filter(Boolean))),
  link: computed(() => ([
    { rel: 'icon', type: 'image/x-icon', href: '/static/logo-rounded.svg' },
    seo.value.canonical && { rel: 'canonical', href: seo.value.canonical },
  ].filter(Boolean))),
})
</script>

<template>
  <main class="default-layout">
    <Header
      class="default-layout__header"
    />

    <RouterView
      :key="route.path"
      v-bind="$attrs"
    />

    <Footer
      :documents="documents"
      class="default-layout__footer"
    />

    <Logger
      v-if="hasLogger"
      v-bind="$attrs"
    />
  </main>
</template>

<style lang="scss">
.default-layout {
  &__footer {
    margin-top: 44px;
  }
}
</style>
