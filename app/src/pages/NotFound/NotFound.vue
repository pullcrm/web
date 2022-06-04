<script setup>
useHead({
  title: 'Сторінка не знайдена - pullcrm',
})
</script>

<template>
  <UiContainer>
    <div class="not-found-page">
      <img src="/static/img/404.svg" alt="">
      <UiTitle
        size="m"
        responsive
      >
        Сторінка не знайдена
      </UiTitle>

      <UiText
        size="l"
        responsive
        class="not-found-page__description"
      >
        За вказаною адресою нічого знайдено. Можливо, сторінка була видалена або посилання некоректне. Спробуйте скористатися одним із розділів:
      </UiText>

      <div class="not-found-page__navigation">
        <UiText
          v-for="item in SITE_NAV_ITEMS"
          :key="item.text"
          tag="RouterLink"
          size="m"
          strong
          :to="item.link"
        >
          {{ item.text }}
        </UiText>
      </div>
    </div>
  </UiContainer>
</template>

<style lang="scss">
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  img {
    width: 440px;
    height: 240px;
    max-width: 100%;
    object-fit: contain;
  }

  .ui-title {
    margin-top: 32px;
  }

  &__description {
    margin-top: 16px;
    max-width: 600px;
  }

  &__navigation {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 8px -16px 0;

    a {
      display: flex;
      align-items: center;
      margin: 8px;
      color: $ui-blue-brand;
    }
  }
}
</style>
