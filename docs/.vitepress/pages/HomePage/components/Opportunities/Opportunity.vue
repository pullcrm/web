<template>
  <UiPanel
    size="m"
    responsive
    class="home-page-opportunity"
  >
    <div
      :style="`background-color: ${color};`"
      class="home-page-opportunity__icon"
    >
      <UiIcon
        :name="icon"
      />
    </div>

    <UiText
      size="l"
      responsive
      class="home-page-opportunity__title"
    >
      {{ title }}
    </UiText>

    <UiText
      size="m"
      strong
      responsive
      class="home-page-opportunity__description"
    >
      {{ description }}
    </UiText>
  </UiPanel>
</template>

<script lang="ts" setup>
interface Props {
  icon: string
  color: string
  title: string
  description: string
}

const { icon, color, title, description } = defineProps<Props>()
</script>

<style lang="scss" src="./Opportunity.scss"></style>
