<script lang="ts" setup>
import Search from './components/Search/Search.vue'
import Preview from './components/Preview/Preview.vue'

import { api } from '~/composables/api'

// TODO: Fetch only needed data
const { data: items } = await api.strapi.pages('faq', { populate: 'deep,2' })
</script>

<template>
  <div class="faq-page">
    <Search />

    <UiContainer>
      <div class="faq-page__inner">
        <Preview
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </div>
    </UiContainer>
  </div>
</template>

<style lang="scss" src="./FaqPage.scss"></style>
