<script lang="ts" setup>
import Search from './components/Search/Search.vue'
import Preview from './components/Preview/Preview.vue'

import type { IFaqItem } from './types'
import { api } from '~/composables/api'
import type { IStrapiPageParams } from '~/services/api'

const route = useRoute()

const items = ref<IFaqItem[]>([])

async function onFetch() {
  try {
    // TODO: Fetch only needed data
    const options: IStrapiPageParams = { populate: 'deep,2' }

    if (route.query.q)
      options._q = String(route.query.q)

    const { data } = await api.strapi.pages('faq', options)

    items.value = data
  }
  catch (err) {
    items.value = []
  }
}

await onFetch()
</script>

<template>
  <div class="faq-page">
    <Search
      @input="onFetch"
    />

    <UiContainer>
      <div class="faq-page__inner">
        <Preview
          v-for="item in items"
          :key="item.id"
          :item="item"
          class="faq-page__preview"
        />
      </div>

      <UiPlaceholder
        v-if="items.length === 0"
        image="/static/img/no-results.png"
        title="Пошук не дав результатів"
        text="Спробуйте змінити запит"
        class="faq-page__placeholder"
      />
    </UiContainer>
  </div>
</template>

<style lang="scss" src="./FaqPage.scss"></style>
