<script lang="ts" setup>
defineProps<{ data: any }>()
</script>

<template>
  <div
    class="wysiwyg"
    v-html="data.content"
  />
</template>

<style lang="scss" src="./Wysiwyg.scss"></style>
