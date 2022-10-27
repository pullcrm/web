<script lang="ts" setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'
import Logger from '~/components/Logger/Logger.vue'
import CookieNotification from '~/components/CookieNotification/CookieNotification.vue'

import { prepareMeta } from '~/logics/meta'
import type { IDocumentLink } from '~/interfaces'

const route = useRoute()
const attrs = useAttrs()

const documents = attrs.footerDocuments as IDocumentLink[]

const hasLogger = computed(() => {
  if (import.meta.env.VITE_HAS_LOGGER === 'true')
    return true

  return route.query.__logger === '1'
})

const seo = computed(() => {
  return (attrs.pageData as any)?.seo ?? {}
})

useHead(prepareMeta(seo))
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

    <CookieNotification />

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
