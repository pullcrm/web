<script lang="ts" setup>
interface IProps {
  pageData?: any
}

const { pageData } = defineProps<IProps>()

const isPopupOpen = ref<boolean>(false)

watch(
  () => isPopupOpen.value,
  (val) => {
    if (val)
      document.body.style.overflow = 'hidden'

    else
      document.body.style.overflow = ''
  },
)
</script>

<template>
  <div class="logger">
    <UiButton
      class="logger-button"
      left-icon="outlined/smiley-x-eyes"
      theme="yellow"
      @click="isPopupOpen = !isPopupOpen"
    />

    <div
      v-if="isPopupOpen"
      class="logger-popup"
    >
      <div class="logger-popup__container">
        <UiButton
          class="logger-popup__button"
          left-icon="solid/x-fill"
          theme="yellow"
          @click="isPopupOpen = !isPopupOpen"
        />

        <pre>
          {{ pageData }}
        </pre>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .logger-button {
    position: fixed;
    bottom: 44px;
    right: 44px;
    z-index: 90;
  }

  .logger-popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 91;
    background-color: $ui-white;

    &__button {
      margin-bottom: 24px;
    }

    &__container {
      padding: 24px;

      pre {
        padding: 24px;
        background-color: $ui-black-10;
        overflow: scroll;
        border-radius: 4px;
      }
    }
  }
</style>
