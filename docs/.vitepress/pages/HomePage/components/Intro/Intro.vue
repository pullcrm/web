<template>
  <div class="home-page-intro">
    <div class="home-page-intro__info">
      <UiTitle
        tag="h1"
        size="xl"
        class="home-page-intro__title"
      >
        <span>Онлайн запис</span>
        І облік клієнтів <br> для вашого бізнесу
      </UiTitle>

      <UiText
        size="l"
        responsive
        class="home-page-intro__text"
      >
        Використовуй зручну систему обліку клієнтів, <br> з онлайн бронюванням, абсолютно безкоштовно.
      </UiText>

      <div class="home-page-intro__actions">
        <UiButton
          v-for="button in buttons"
          :key="button.id"
          tag="a"
          :href="`/registration/?companyType=${button.id}`"
          size="m"
          theme="info-outlined"
        >
          {{ button.name }}
        </UiButton>

        <UiButton
          tag="a"
          href="/registration/"
          size="m"
          theme="blue"
          right-icon="outlined/arrow-right"
        >
          Підключитись
        </UiButton>
      </div>
    </div>

    <div class="home-page-intro__image">
      <UiButton
        size="m"
        theme="green"
        right-icon="solid/play-fill"
        class="home-page-intro__video"
        @click="openVideo"
      >
        Подивитись
      </UiButton>

      <img
        src="/static/img/landing-intro.png"
        alt="pullcrm intro image"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useData } from 'vitepress'

const { frontmatter } = useData()

const buttons = computed(() => {
  return frontmatter.value.buttons
})

const openVideo = () => {
  // TODO: Add video popup
  console.log('video opened')
  // this.$typedStore.dispatch('popup/show', 'youtube-intro')
}
</script>

<style lang="scss" src="./Intro.scss"></style>
