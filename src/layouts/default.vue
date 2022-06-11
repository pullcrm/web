<script lang="ts" setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'
import Logger from '~/components/Logger/Logger.vue'
import { api } from '~/composables/api'
import { prepareMeta } from '~/logics/meta'

const route = useRoute()
const attrs = useAttrs()

const documents = ref([])

const hasLogger = computed(() => {
  return route.query.__logger === '1'
})

async function fetchDocuments() {
  try {
    const { data } = await api.strapi.category('/document-page/', { populate: 'deep,0' })

    documents.value = data
  }
  catch (_err) {}
}

const seo = computed(() => {
  return (attrs.pageData as any)?.seo ?? {}
})

useHead(prepareMeta(seo))

await fetchDocuments()
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
