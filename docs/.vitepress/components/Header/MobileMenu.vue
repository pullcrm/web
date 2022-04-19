<script lang="ts" setup>
import Actions from './Actions.vue'
import Navigation from './Navigation.vue'

const emit = defineEmits([
  'close',
])

const close = () => {
  emit('close')
}
</script>

<template>
  <div class="header-mobile-menu">
    <div
      class="header-mobile-menu__backdrop"
      @click="close"
    />

    <div class="header-mobile-menu__inner">
      <UiIcon
        size="m"
        name="solid/x-fill"
        class="header-mobile-menu__close"
        @click="close"
      />

      <Navigation
        class="header-mobile-menu__navigation"
      />

      <Actions
        class="header-mobile-menu__actions"
      />
    </div>
  </div>
</template>

<style lang="scss" src="./MobileMenu.scss"></style>
