<script lang="ts">
export default {
  emits: ['toggle']
}
</script>

<template>
  <div class="navbar-toggle-button" @click="$emit('toggle')">
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
        class
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.navbar-toggle-button {
  cursor: pointer;
}

.navbar-toggle-button .icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}

@media (min-width: $ui-tablet) {
  .navbar-toggle-button {
    display: none;
    cursor: pointer;
  }
}
</style>
