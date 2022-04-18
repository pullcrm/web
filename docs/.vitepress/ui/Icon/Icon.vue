<template>
  <i
    :class="[
      'ui-icon',
      `ui-icon_size_${size}`,
      `ui-icon_${name.replace('/', '-')}`,
    ]"
    :style="{
      backgroundImage: `url(${icon})`
    }"
  >
    <svg>
      <use :xlink:href="`${icon}#__THIS_ID_NEEDS_FOR_UI_ICON_COMPONENT__`" />
    </svg>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },

    size: {
      type: String,
      default: 'm'
    }
  },

  setup (props) {
    // TODO: Remove extra icons
    // TODO: Move ui icons to assets or change to some library

    return {
      icon: computed(() => `/ui-icons/${props.name}.svg`)
    }
  }
})
</script>

<style lang="scss" src="./Icon.scss"></style>
