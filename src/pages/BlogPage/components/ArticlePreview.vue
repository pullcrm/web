<script lang="ts" setup>
import { prepareStrapiImage } from '~/logics/image'
import type { IBlogItem } from '~/dto'

const props = defineProps<{ item: IBlogItem }>()

const seo = computed(() => {
  return props.item.seo || {}
})

const previewImage = computed(() => {
  const { url } = seo.value.metaImage || {}

  if (url)
    return prepareStrapiImage(url)
})

const content = computed(() => {
  return (props.item.content || '').replace(/<[^>]*>?/gm, '')
})

const category = computed(() => {
  return props.item.category
})

const timeToRead = readingTime(props.item.content ?? '')
</script>

<template>
  <RouterLink
    :to="`/blog/${category.slug}/${item.slug}/`"
    class="blog-page-article-preview"
  >
    <div class="blog-page-article-preview__info">
      <!-- author -->
      <UiTitle
        size="s"
        tag="h3"
        strong
        class="blog-page-article-preview__title"
      >
        {{ item.title }}
      </UiTitle>

      <UiText
        size="m"
        class="blog-page-article-preview__content"
      >
        {{ `${content.slice(0, 256)}...` }}
      </UiText>

      <UiText
        size="m"
        responsive
        class="blog-page-article-preview__footer"
      >
        {{ formatDate(item.updatedAt, 'D MMMM') }}

        <span>·</span>

        {{ timeToRead }} min read

        <span>·</span>

        <!-- TODO: Add link to category -->
        <!-- :to="`/blog/${category.slug}/`" -->
        <UiBadge
          v-if="category"
          size="s"
          theme="custom"
          @click.prevent
        >
          {{ category.title }}
        </UiBadge>
      </UiText>
    </div>

    <div class="blog-page-article-preview__image">
      <img :src="previewImage || SITE_LOGO_URL" alt="">
    </div>
  </RouterLink>
</template>

<style lang="scss" src="./ArticlePreview.scss"></style>
