<script lang="ts" setup>
import Intro from './components/Intro/Intro.vue'
import About from './components/About/About.vue'
import Reviews from './components/Reviews/Reviews.vue'
import Opportunities from './components/Opportunities/Opportunities.vue'
</script>

<template>
  <div class="home-page">
    <UiAlert
      theme="info"
      left-icon="outlined/anchor"
      class="home-page__alert"
    >
      <UiText
        size="m"
        strong
        responsive
      >
        Рускі CRM системи, йдіть слідом за воєнним кораблем!
      </UiText>
    </UiAlert>

    <Intro />

    <Opportunities
      class="home-page__section"
    />

    <About
      class="home-page__section"
    />

    <Reviews
      class="home-page__section"
    />
  </div>
</template>

<style src="./HomePage.scss" lang="scss"></style>
