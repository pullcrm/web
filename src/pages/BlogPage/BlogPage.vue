<script lang="ts" setup>
import ArticlePreview from './components/ArticlePreview.vue'
import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs.vue'

import type { IBlogItem } from '~/dto'

const { pageData, items } = defineProps<{ items?: IBlogItem[]; pageData: any }>()

const route = useRoute()

const breadcrumbs = computed(() => {
  return [
    {
      title: 'Головна',
      to: '/',
    },
    {
      title: 'Блог',
      to: '/blog/',
    },
    route.params.slug && {
      title: pageData.title,
    },
  ].filter(Boolean)
})
</script>

<template>
  <UiContainer>
    <div class="blog-page">
      <Breadcrumbs
        :items="breadcrumbs"
        class="blog-page__breadcrumbs"
      />

      <div class="blog-page__items">
        <ArticlePreview
          v-for="item in items"
          :key="item.id"
          :item="item"
          class="blog-page__preview"
        />
      </div>
    </div>
  </UiContainer>
</template>

<style lang="scss" src="./BlogPage.scss"></style>
