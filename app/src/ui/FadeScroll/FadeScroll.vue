<script lang="ts" setup>
</script>

<template>
  <div class="ui-fade-scroll">
    <div class="ui-fade-scroll__overlay" />
    <div class="ui-fade-scroll__inner">
      <slot />
    </div>
    <div class="ui-fade-scroll__overlay" />
  </div>
</template>

<style lang="scss" src="./FadeScroll.scss"></style>
