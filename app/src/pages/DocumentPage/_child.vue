<script lang="ts" setup>
import DynamicComponent from '~/components/Dynamic/Define.vue'

interface IProps {
  pageData?: any
  // testData?: any
}

const { pageData } = defineProps<IProps>()

const { sections } = pageData || {}

// if (seo) {
//   useHead({
//     title: seo.metaTitle,
//     description: seo.metaDescription,
//   })
// }
</script>

<template>
  <UiContainer>
    <div class="document-child-page">
      <DynamicComponent
        v-for="(section, index) in sections"
        :key="index"
        :name="section.__component"
        :data="section"
      />
    </div>
  </UiContainer>
</template>

<style src="./_child.scss" lang="scss"></style>
