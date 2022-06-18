<script lang="ts" setup>
</script>

<template>
  <UiPanel
    size="m"
    responsive
    class="home-page-about"
  >
    <UiTitle
      tag="h2"
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
        href="/app/registration/"
        target="_self"
        size="m"
        theme="blue"
      >
        Підключитись
      </UiButton>
    </UiPanel>
  </UiPanel>
</template>

<style lang="scss" src="./About.scss"></style>
