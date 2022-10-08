<script lang="ts" setup>
import Actions from './Actions.vue'
import Navigation from './Navigation.vue'

defineProps<{
  opened: boolean
}>()

const emit = defineEmits([
  'update:opened',
])

const router = useRouter()

router.afterEach(() => close())

function close() {
  emit('update:opened', false)
}
</script>

<template>
  <div class="header-mobile-menu">
    <Transition name="fade">
      <div
        v-if="opened"
        class="header-mobile-menu__backdrop"
        @click="close"
      />
    </Transition>

    <Transition name="translateRight">
      <div
        v-if="opened"
        class="header-mobile-menu__inner"
      >
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
    </Transition>
  </div>
</template>

<style lang="scss" src="./MobileMenu.scss"></style>
