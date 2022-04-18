<script lang="ts" setup>
import { useData } from 'vitepress'

import NavLink from './NavLink.vue'
import NavDropdownLink from './NavDropdownLink.vue'

const { theme } = useData()
</script>

<template>
  <div class="navbar-navigation">
    <template v-if="theme.nav">
      <template v-for="item in theme.nav" :key="item.text">
        <NavDropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" />
      </template>
    </template>

    <!-- <div v-if="localeLinks" class="item">
      <NavDropdownLink :item="localeLinks" />
    </div> -->
  </div>
</template>

<style lang="scss">
@import '../../scss/variables';

.navbar-navigation {
  display: none;

  @media (min-width: $ui-tablet) {
    display: flex;
    flex-direction: row;
    margin: 0 -12px;

    .nav-link,
    .nav-dropdown-link {
      margin: 0 12px;
      padding: 0;
    }
  }
}
</style>
