<script setup lang="ts">
import { toRefs } from 'vue'

import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'

const props = defineProps<{
  item: {
    link: string
  }
}>()

const propsRefs = toRefs(props)

const { props: linkProps } = useNavLink(propsRefs.item)
// TODO: Need wrapper for slot
</script>

<template>
  <slot v-bind="linkProps" />
</template>
