<script lang="ts" setup>
</script>

<template>
  <div class="header-actions">
    <UiText
      tag="a"
      href="/login/"
      size="m"
      strong
      class="header-actions__login"
    >
      Увійти
    </UiText>

    <div class="header-actions__divider" />

    <UiText
      tag="a"
      href="/registration/"
      size="m"
      strong
      class="header-actions__registration"
    >
      Реєстрація
    </UiText>
  </div>
</template>

<style lang="scss">
.header-actions {
  &__divider {
    display: none;
  }

  &__login,
  &__registration {
    margin-bottom: 8px;
    padding: 8px 0;
  }

  @media (min-width: $ui-tablet) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__login,
    &__registration {
      margin-bottom: 0;
      padding: 0;
    }

    &__divider {
      display: block;
      min-width: 1px;
      height: 16px;
      margin: 0 16px;
      background: $ui-black-40;
    }
  }
}
</style>
