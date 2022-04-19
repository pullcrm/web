<script setup lang="ts">
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'

import Actions from './Actions.vue'
import Navigation from './Navigation.vue'
import MobileMenu from './MobileMenu.vue'

const { site, theme, localePath } = useData()

const mobileMenuOpen = ref(false)

defineEmits(['toggle'])
</script>

<template>
  <header class="header">
    <UiContainer>
      <div class="header__inner">
        <div class="header__logo">
          <UiText
            tag="a"
            :href="localePath"
            :aria-label="`${site.title}, back to home`"
            size="m"
            strong
            responsive
          >
            <template #prepend>
              <img
                v-if="theme.logo"
                :src="withBase(theme.logo)"
                alt="Logo"
              >
            </template>

            {{ site.title }}
          </UiText>
        </div>

        <div class="header__nav">
          <Navigation />
        </div>

        <Actions
          class="header__actions"
        />

        <UiIcon
          size="m"
          name="solid/list-fill"
          class="header__burger"
          @click="mobileMenuOpen = true"
        />
      </div>
    </UiContainer>

    <MobileMenu
      v-if="mobileMenuOpen"
      class="header__mobile-menu"
      @close="mobileMenuOpen = false"
    />
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: $ui-white;
  border-bottom: 1px solid $ui-black-20;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(56px - 1px/* border-bottom*/);
  }

  &__logo {
    img {
      width: 32px;
      border-radius: 8px;
    }
  }

  &__nav {
    display: none;
  }

  &__actions {
    display: none;
  }

  @media (min-width: $ui-tablet) {
    &__burger,
    &__mobile-menu {
      display: none;
    }

    &__nav {
      display: flex;
      flex: 1;
      justify-content: center;
      height: 100%;
    }

    &__logo,
    &__actions {
      display: flex;
      width: 165px;
    }
  }
}
</style>
