<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="youtube-video">
    <iframe
      :src="`https://www.youtube.com/embed/${id}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style lang="scss">
.youtube-video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
