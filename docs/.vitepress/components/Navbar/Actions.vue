<script lang="ts" setup>
const loginNav = [
  {
    text: 'Увійти',
    link: '/login/',
    target: '_self',
  },
  {
    text: 'Реєстрація',
    link: '/registration/',
    target: '_self',
  }
]

import NavLink from './NavLink.vue'

</script>

<template>
  <div class="navbar-actions">
    <NavLink
      v-for="item in loginNav" :key="item.text"
      :item="item"
    />
  </div>
</template>

<style lang="scss">
@import '../../scss/variables';

.navbar-actions {
  display: none;

  @media (min-width: $ui-tablet) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-link + .nav-link {
      margin-left: 16px;
      padding-left: 16px;
      border-left: 1px solid $ui-black-40;
    }
  }
}
</style>
