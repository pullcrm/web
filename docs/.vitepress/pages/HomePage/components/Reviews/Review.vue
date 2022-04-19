<script lang="ts" setup>
interface IReview {
  info: string
  name: string
  link: string | null
  image: string | null
  content: string
}

defineProps({
  review: {
    type: Object as IReview,
    required: true,
  },
})
</script>

<template>
  <UiPanel
    size="m"
    class="home-page-review"
  >
    <img
      src="/static/img/quote.svg"
      alt="quote"
      class="home-page-review__quote"
    >

    <UiText
      size="m"
      class="home-page-review__text"
      v-html="review.content"
    />

    <div class="home-page-review__author">
      <div
        v-if="review.image"
        class="home-page-review__image"
      >
        <img
          :src="review.image"
          :alt="review.name"
        >
      </div>

      <div class="home-page-review__author-info">
        <UiTitle
          size="s"
          class="home-page-review__name"
        >
          {{ review.name }}
        </UiTitle>

        <UiText
          size="m"
          class="home-page-review__info"
        >
          <template v-if="review.link">
            <a :href="review.link" target="_blank">
              {{ review.info }}
            </a>
          </template>
          <template v-else>
            {{ review.info }}
          </template>
        </UiText>
      </div>
    </div>
  </UiPanel>
</template>

<style lang="scss" src="./Review.scss"></style>
