<script lang="ts" setup>
</script>

<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-container {
  @include ui-container;

  // @TODO: Refactor
  max-width: 968px !important;
}
</style>
