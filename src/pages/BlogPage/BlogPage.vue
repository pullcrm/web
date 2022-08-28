<script lang="ts" setup>
import ArticlePreview from './components/ArticlePreview.vue'
import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs.vue'

import type { IBlogItem, IBreadcrumbsItem, IPagination } from '~/dto'

const { pageData, items, pagination } = defineProps<{
  items?: IBlogItem[]
  pageData: any
  pagination: IPagination
}>()

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
  ].filter(Boolean) as IBreadcrumbsItem[]
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

      <UiPagination
        v-bind="pagination"
        class="blog-page__pagination"
      />
    </div>
  </UiContainer>
</template>

<style lang="scss" src="./BlogPage.scss"></style>
