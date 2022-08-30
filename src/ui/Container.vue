<script lang="ts" setup>
defineProps({
  narrow: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="ui-container"
    :class="{
      'ui-container__narrow': narrow,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.ui-container {
  @include ui-container;

  // @TODO: Refactor
  max-width: 980px !important;

  &__narrow {
    @include ui-container-narrow;
  }
}
</style>
