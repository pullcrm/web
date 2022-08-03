<script lang="ts" setup>
import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs.vue'
import Wysiwyg from '~/components/Dynamic/Wysiwyg/Wysiwyg.vue'

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
</script>

<template>
  <UiContainer>
    <div class="blog-child-page">
      <Breadcrumbs
        :items="breadcrumbs"
        class="blog-child-page__breadcrumbs"
      />

      <UiText
        size="m"
        responsive
        class="blog-child-page__footer"
      >
        {{ formatDate(pageData.updatedAt, 'D MMMM') }}

        <span>·</span>

        {{ timeToRead }} min read
      </UiText>

      <UiTitle
        tag="h1"
        size="l"
        responsive
        class="blog-child-page__title"
      >
        {{ pageData.title }}
      </UiTitle>

      <Wysiwyg
        :data="{ content }"
      />
    </div>
  </UiContainer>
</template>

<style src="./_child.scss" lang="scss"></style>
