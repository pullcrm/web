<script lang="ts" setup>
import CustomerForm from './components/CustomerForm.vue'
</script>

<template>
  <UiContainer>
    <div class="contacts-page">
      <CustomerForm
        class="contacts-page__customer-form"
      />

      <UiPanel
        size="m"
        responsive
        class="contacts-page-info contacts-page__info"
      >
        <div class="contacts-page-info__column">
          <UiTitle
            size="l"
            left-icon="outlined/map-pin"
          >
            Україна, Одеса
          </UiTitle>
        </div>

        <div class="contacts-page-info__column">
          <UiText
            tag="a"
            href="https://t.me/pullcrm"
            target="_blank"
            size="l"
            left-icon="outlined/telegram-logo"
            responsive
          >
            Telegram
          </UiText>

          <UiText
            tag="a"
            href="https://instagram.com/pullcrm"
            target="_blank"
            size="l"
            left-icon="outlined/instagram-logo"
            responsive
          >
            Instagram
          </UiText>
        </div>

        <div class="contacts-page-info__column">
          <UiText
            tag="a"
            href="tel:+380633103240"
            size="l"
            left-icon="outlined/phone"
            responsive
          >
            +38 063 310 32 40
          </UiText>

          <UiText
            tag="a"
            href="mailto:pullrm.com@gmail.com"
            size="l"
            left-icon="outlined/envelope-simple"
            responsive
          >
            pullrm.com@gmail.com
          </UiText>
        </div>
      </UiPanel>
    </div>
  </UiContainer>
</template>

<style lang="scss" src="./ContactsPage.scss"></style>
