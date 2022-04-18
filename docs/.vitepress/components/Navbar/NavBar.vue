<script setup lang="ts">
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()

import Actions from './Actions.vue'
import Navigation from './Navigation.vue'
import ToggleSideBarButton from './ToggleSideBarButton.vue'

defineEmits(['toggle'])
</script>

<template>
  <header class="navbar">
    <UiContainer>
      <div class="navbar__inner">
        <ToggleSideBarButton
          class="navbar__toggle"
          @toggle="$emit('toggle')"
        />

        <a
          class="navbar__logo"
          :href="localePath"
          :aria-label="`${site.title}, back to home`"
        >
          <img
            v-if="theme.logo"
            :src="withBase(theme.logo)"
            alt="Logo"
          />

          <strong>
            {{ site.title }}
          </strong>
        </a>

        <div class="navbar__nav">
          <Navigation />
        </div>

        <Actions
          class="navbar__actions"
        />
      </div>
    </UiContainer>
  </header>
</template>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/typo-mixins';

.navbar {
  background: $ui-white;
  border-bottom: 1px solid $ui-black-20;

  &__inner {
    display: flex;
    align-items: center;
    height: calc(56px - 1px/* border-bottom*/);
  }

  &__toggle {
    margin-right: 16px;
  }

  &__logo {
    display: flex;
    align-items: center;
    color: $ui-black-100;

    &:hover {
      text-decoration: none;
    }

    img {
      width: 32px;
      border-radius: 8px;
      margin-right: 8px;
    }

    strong {
      @include ui-typo-14;

      font-weight: 600;
    }
  }

  @media (min-width: $ui-laptop) {
    &__logo {
      width: 165px;
    }

    &__inner {
      justify-content: space-between;
    }
  }
}
</style>
