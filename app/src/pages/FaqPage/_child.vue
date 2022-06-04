<script lang="ts" setup>
import Breadcrumbs from '~/components/Breadcrumbs/Breadcrumbs.vue'
import DynamicComponent from '~/components/Dynamic/Define.vue'

interface IProps {
  pageData?: any
}

const { pageData } = defineProps<IProps>()

const { sections } = pageData || {}

const breadcrumbs = computed(() => {
  return [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Home2',
    },
  ]
})
</script>

<template>
  <UiContainer>
    <div class="document-child-page">
      <Breadcrumbs
        :items="breadcrumbs"
        class="document-child-page__breadcrumbs"
      />

      <UiTitle
        tag="h1"
        size="l"
        responsive
        class="document-child-page__title"
      >
        {{ pageData.title }}
      </UiTitle>

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
