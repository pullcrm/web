<script lang="ts" setup>
interface IReview {
  info: string
  name: string
  link: string | null
  image: string | null
  content: string
}

interface IProps {
  review: IReview
}

defineProps<IProps>()

const onLinkClick = (review: IReview) => {
  if (review.link)
    window.open(review.link, '_blank')
}
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
    >
      <div
        v-html="review.content"
      />
    </UiText>

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
          :tag="review.link ? 'a' : 'div'"
          href="#"
          size="m"
          class="home-page-review__info"
          @click.prevent="onLinkClick(review)"
        >
          {{ review.info }}
        </UiText>
      </div>
    </div>
  </UiPanel>
</template>

<style lang="scss" src="./Review.scss"></style>
