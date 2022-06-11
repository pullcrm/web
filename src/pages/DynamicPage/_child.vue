<script lang="ts" setup>
import DynamicComponent from '~/components/Dynamic/Define.vue'

interface IProps {
  pageData?: any
}

const { pageData } = defineProps<IProps>()

const { sections } = pageData || {}
</script>

<template>
  <UiContainer>
    <div class="dynamic-page">
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
