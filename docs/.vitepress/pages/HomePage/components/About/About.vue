<script lang="ts" setup>
import { useAbsoluteLink } from '~/composables/location'
</script>

<template>
  <UiPanel
    size="m"
    responsive
    class="home-page-about"
  >
    <UiTitle
      size="m"
      responsive
      class="home-page-about__title"
    >
      Pullcrm це інструмент для бізнесу у сфері надання послуг, який допоможе концентруватися на сервісі, а вирішення частини проблем процесу запису клієнтів ми, як інструмент, візьмемо на себе
    </UiTitle>

    <UiPanel
      size="l"
      class="home-page-about__action"
    >
      <UiTitle
        size="s"
        responsive
        class="home-page-about__text"
      >
        Хочеш налагодити процеси у бізнесі? <br> Підключайся та витрачай час на справді важливі речі!
      </UiTitle>

      <UiButton
        tag="a"
        href="#"
        size="m"
        theme="blue"
        @click.prevent="useAbsoluteLink('/app/registration/')"
      >
        Підключитись
      </UiButton>
    </UiPanel>
  </UiPanel>
</template>

<style lang="scss" src="./About.scss"></style>
