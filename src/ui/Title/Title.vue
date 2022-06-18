<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: 'm',
  },

  tag: {
    type: String,
    default: 'div',
  },

  responsive: {
    type: Boolean,
    default: false,
  },

  leftIcon: {
    type: String,
    default: undefined,
  },

  rightIcon: {
    type: String,
    default: undefined,
  },
})
const slots = useSlots()
// readonly tag: string
// readonly size: 's' | 'm' | 'l' | 'xl'
// readonly leftIcon?: string
// readonly rightIcon?: string
// readonly responsive: boolean

const prepend = computed(() => {
  return props.leftIcon || slots.prepend
})

const append = computed(() => {
  return props.rightIcon || slots.append
})
</script>

<template>
  <Component
    :is="tag"
    class="ui-title"
    :class="[
      `ui-title_size_${size}`,
      { 'ui-title_has-append': Boolean(append) },
      { 'ui-title_has-prepend': Boolean(prepend) },
      { 'ui-title_responsive': responsive },
    ]"
    v-bind="$attrs"
  >
    <span
      v-if="leftIcon"
      class="ui-title__prepend"
    >
      <UiIcon
        :name="leftIcon"
        size="inherit"
      />
    </span>
    <span
      v-else-if="$slots.prepend"
      class="ui-title__prepend"
    >
      <slot name="prepend" />
    </span>

    <div
      v-if="append || prepend"
      class="ui-title__content"
    >
      <slot />
    </div>

    <slot v-else />

    <span
      v-if="rightIcon"
      class="ui-title__append"
    >
      <UiIcon
        :name="rightIcon"
        size="inherit"
      />
    </span>
    <span
      v-else-if="$slots.append"
      class="ui-title__append"
    >
      <slot name="append" />
    </span>
  </Component>
</template>

<style lang="scss" src="./Title.scss"></style>
