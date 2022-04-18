<template>
  <div
    v-if="reviews.length > 0"
    class="home-page-reviews"
  >
    <UiTitle
      class="home-page-reviews__title"
      size="m"
    >
      Відгуки наших клієнтів
    </UiTitle>

    <UiCarousel
      class="home-page-reviews__carousel"
    >
      <UiCarouselItem
        v-for="(review, index) in reviews"
        :key="index"
      >
        <Review
          :review="review"
        />
      </UiCarouselItem>
    </UiCarousel>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useData } from 'vitepress'

import Review from './Review.vue'

const { frontmatter } = useData()

const reviews = computed(() => {
  return frontmatter.value.reviews
})
</script>

<style lang="scss" src="./Reviews.scss"></style>
