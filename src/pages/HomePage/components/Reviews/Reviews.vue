<script lang="ts" setup>
import Review from './Review.vue'

const reviews = computed(() => {
  return [
    {
      name: 'Женя',
      info: 'Founder "Barbershop London"',
      link: 'https://www.instagram.com/bigi_cuts/',
      image: '/static/reviews/review_bigi_cuts.jpeg',
      content: 'Ми відчуваємо, що нарешті знайшли інструмент, який дає нам змогу розвиватися - і він буде розширюватись по міри того як росте наша команда.',
    },

    {
      name: 'Адель',
      info: 'Засновниця "MyNails"',
      link: null,
      image: null,
      content: 'Ми розглядали декілька варіантів систем обліку клієнтів, але в такий не простий час вирішили підтримати Український стартап і ніскільки про це не пожаліли.',
    },

    {
      name: 'Олександр',
      info: 'Головний лікар ветеринарної медицини',
      link: null,
      image: null,
      content: 'Користуємось продуктом менше року і не знаємо проблем, pullcrm - це вибір для тих кому не потрібна маса функціоналу а хвилює швидкий запис і стабільна робота.',
    },
  ]
})
</script>

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

<style lang="scss" src="./Reviews.scss"></style>
