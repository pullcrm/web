<script lang="ts" setup>
</script>

<template>
  <div class="breadcrumbs-item">
    <UiIcon
      class="breadcrumbs-item__icon"
      name="outlined/caret-right-small"
      size="s"
    />

    <slot />
  </div>
</template>

<style lang="scss" src="./BreadcrumbsItem.scss" />
