<script lang="ts" setup>
import Search from './components/Search/Search.vue'
import Preview from './components/Preview/Preview.vue'

import type { IFaqItem } from './types'
import { onFetch } from '~/middleware/faq-page'

const props = defineProps<{ items?: IFaqItem[] }>()

const route = useRoute()

const items = ref<IFaqItem[]>(props.items || [])
const isLoading = ref(false)

async function onFetchItems() {
  try {
    isLoading.value = true

    const { data } = await onFetch(route.query.q as string)

    items.value = data
  }
  catch (err) {
    items.value = []
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="faq-page">
    <Search
      :loading="isLoading"
      @input="onFetchItems"
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
