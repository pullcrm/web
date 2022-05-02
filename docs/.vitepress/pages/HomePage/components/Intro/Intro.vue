<script lang="ts" setup>
import { computed, ref } from 'vue'

import { useData } from 'vitepress'

import { useAbsoluteLink } from '~/composables/location'

import Youtube from '~/components/Youtube/Youtube.vue'

const { frontmatter } = useData()

const isVideoOpened = ref(false)

const buttons = computed(() => {
  return frontmatter.value.buttons
})
</script>

<template>
  <div class="home-page-intro">
    <div class="home-page-intro__info">
      <UiTitle
        tag="h1"
        size="l"
        class="home-page-intro__title"
      >
        <span>Онлайн запис</span>
        Та облік клієнтів <br> для вашого бізнесу
      </UiTitle>

      <UiText
        size="m"
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
          href="#"
          size="m"
          theme="info-outlined"
          @click.prevent="useAbsoluteLink(`/app/registration/?companyType=${button.id}`)"
        >
          {{ button.name }}
        </UiButton>

        <UiButton
          tag="a"
          href="#"
          size="m"
          theme="blue"
          right-icon="outlined/arrow-right"
          @click.prevent="useAbsoluteLink('/app/registration/')"
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
        @click="isVideoOpened = true"
      >
        Подивитись
      </UiButton>

      <img
        src="/static/img/landing-intro.png"
        alt="pullcrm intro image"
      >
    </div>
  </div>

  <UiPopupBackdrop
    v-if="isVideoOpened"
    @close="isVideoOpened = false"
  >
    <UiPopup
      class="popup-youtube-intro"
      @close="isVideoOpened = false"
    >
      <Youtube
        id="_jSNjI9TQD0"
      />
    </UiPopup>
  </UiPopupBackdrop>
</template>

<style lang="scss" src="./Intro.scss"></style>
