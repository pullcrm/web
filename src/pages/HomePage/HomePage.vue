<script lang="ts" setup>
import Alert from './components/Alert/Alert.vue'
import Intro from './components/Intro/Intro.vue'
import About from './components/About/About.vue'
import Reviews from './components/Reviews/Reviews.vue'
import Opportunities from './components/Opportunities/Opportunities.vue'

// interface IProps {
//   pageData?: any
// }

// const { pageData } = defineProps<IProps>()

// const { sections } = pageData || {}
</script>

<template>
  <UiContainer>
    <div class="home-page">
      <!-- <pre>
      {{ pageData }}
    </pre>

    <Component
      :is="section.__component.split('.')[1]"
      v-for="(section, index) in sections"
      :key="index"
    /> -->

      <Alert
        class="home-page__alert"
      />

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
  </UiContainer>
</template>

<style src="./HomePage.scss" lang="scss"></style>
