<script setup>
import { useData } from 'vitepress'

import NavLink from '~/components/NavLink.vue'

const { theme, frontmatter } = useData()

</script>

<template>
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
      <NavLink
        v-for="item in theme.nav"
        :key="item.text"
        :item="item"
      >
        <template #default="props">
          <UiText
            tag="a"
            size="m"
            strong
            v-bind="props"
          >
            {{ item.text }}
          </UiText>
        </template>
      </NavLink>
    </div>
  </div>
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
