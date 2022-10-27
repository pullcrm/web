<script lang="ts" setup>
const COOKIE_NOTIFICATION = 'PULLCRM_COOKIE_NOTIFICATION'

const isVisible = ref(false)

onMounted(() => {
  if (getCookie(document.cookie, COOKIE_NOTIFICATION))
    return

  isVisible.value = true
})

function hide() {
  document.cookie = setCookie(COOKIE_NOTIFICATION, 'true', {
    days: 30,
    domain: import.meta.env.VITE_SITE_HOSTNAME,
  })

  isVisible.value = false
}
</script>

<template>
  <Transition name="fade">
    <UiPanel
      v-show="isVisible"
      size="m"
      class="cookie-notification"
      responsive
    >
      <UiText size="l" responsive>
        Користуючись цим веб-сайтом, ви погоджуєтесь на використання нами файлів cookie. <RouterLink to="/documents/cookie/">
          Про політику конфіденційності.
        </RouterLink>
      </UiText>

      <UiButton
        size="m"
        theme="info-outlined"
        @click="hide"
      >
        OK
      </UiButton>
    </UiPanel>
  </Transition>
</template>

<style lang="scss">
@import '~/ui/Link/Link_theme_action.scss';

.cookie-notification {
  @include ui-safe-bottom(24px);
  @include ui-shadow-16;

  left: 50%;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 780px;
  background-color: rgba($ui-white, 0.95);
  transform: translateX(-50%);

  a {
    @include ui-link_theme_action;

    font-weight: bold;
  }

  .ui-button {
    @include ui-extend-click-area(16px);

    margin-left: 16px;
  }
}
</style>
