<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import '../scss/mixins';

.ui-container {
  @include ui-container;

  // @TODO: Refactor
  // max-width: 968px !important;
}
</style>
