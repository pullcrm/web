<script lang="ts" setup>
type IAlign =
  | 'left'
  | 'center'
  | 'right'

const props = defineProps<{ align: IAlign }>()

defineEmits(['close'])

const align = computed(() => props.align || 'center')
</script>

<template>
  <div
    class="ui-popup-backdrop"
    data-test="ui-popup-backdrop"
    :class="`ui-popup-backdrop_align_${align}`"
  >
    <div
      class="ui-popup-backdrop__backdrop"
      @click="$emit('close')"
    />

    <div class="ui-popup-backdrop__body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  @keyframes ui-popup-backdrop {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .ui-popup-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    animation: ui-popup-backdrop 0.2s both ease-out;

    .ui-popup {
      margin: 24px;
    }

    &_align_left {
      .ui-popup-backdrop__body {
        text-align: left;
      }
    }

    &_align_center {
      .ui-popup-backdrop__body {
        text-align: center;
      }
    }

    &_align_right {
      .ui-popup-backdrop__body {
        text-align: right;
      }
    }

    &__backdrop {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba($ui-black-100, 0.75);
    }

    &__body {
      --scroll-offset: 16px;

      display: inline-block;
      width: 100%;
      height: 100%;
      overflow: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;

      &::before {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        content: '';
      }
    }

    @media (max-width: ($ui-tablet - 1px)) {
      @media (max-width: ($ui-mobile-portrait - 1px)) {
        .ui-popup {
          margin: 16px;
        }
      }
    }
  }
</style>
