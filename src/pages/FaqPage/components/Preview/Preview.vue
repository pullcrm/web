<script lang="ts" setup>
import type { IFaqItem } from '../../types'

const props = defineProps<{ item: IFaqItem }>()

const seo = computed(() => {
  return props.item.seo || {}
})
</script>

<template>
  <UiPanel
    tag="RouterLink"
    :to="`/faq/${item.slug}/`"
    size="m"
    clickable
    responsive
    class="faq-page-preview"
  >
    <UiText
      size="l"
      strong
      class="faq-page-preview__title"
    >
      {{ item.title }}
    </UiText>

    <UiText
      size="m"
      class="faq-page-preview__subtitle"
    >
      {{ seo.metaDescription }}
    </UiText>

    <div class="faq-page-preview__footer">
      <div class="faq-page-preview__footer-image">
        <img :src="SITE_LOGO_URL" alt="">
      </div>

      <div class="faq-page-preview__footer-info">
        <UiText
          size="m"
          class="faq-page-preview__author"
        >
          <strong>Автор:</strong> Pullcrm
        </UiText>

        <UiText
          size="m"
          class="faq-page-preview__date"
        >
          Оновлено {{ formatDate(item.updatedAt, 'D MMMM YYYY') }}
        </UiText>
      </div>
    </div>
  </UiPanel>
</template>

<style lang="scss" src="./Preview.scss"></style>
