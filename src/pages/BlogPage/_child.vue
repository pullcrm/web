<script lang="ts" setup>
import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs.vue'
import Wysiwyg from '~/components/Dynamic/Wysiwyg/Wysiwyg.vue'

import { prepareStrapiImage } from '~/logics/image'

interface IProps {
  pageData?: any
}

const { pageData } = defineProps<IProps>()
const { content, category } = pageData

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
    category && {
      title: category.title,
      to: `/blog/${category.slug}/`,
    },
    {
      title: pageData.title,
    },
  ].filter(Boolean)
})

const timeToRead = readingTime(pageData.content ?? '')

const previewImage = computed(() => {
  const { url } = pageData.seo.metaImage || {}

  if (url)
    return prepareStrapiImage(url)
})
</script>

<template>
  <div class="blog-child-page">
    <UiContainer>
      <Breadcrumbs
        :items="breadcrumbs"
        class="blog-child-page__breadcrumbs"
      />
    </UiContainer>

    <UiContainer narrow>
      <div class="blog-child-page__title">
        <UiText
          size="s"
          responsive
          class="blog-child-page__date"
        >
          {{ formatDate(pageData.updatedAt, 'D MMMM YYYY') }}

          <span>·</span>

          {{ timeToRead }} min read
        </UiText>

        <UiTitle
          tag="h1"
          size="l"
        >
          {{ pageData.title }}
        </UiTitle>
      </div>

      <Wysiwyg
        :data="{ content }"
      />
    </UiContainer>
  </div>
</template>

<style src="./_child.scss" lang="scss"></style>
