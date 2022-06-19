<script lang="ts" setup>
import type { IDocumentLink } from '~/interfaces'

defineProps<IProps>()

interface IProps {
  documents: IDocumentLink[]
}
</script>

<template>
  <div class="footer">
    <UiContainer>
      <div class="footer__grid">
        <div class="footer__column">
          <UiText
            size="m"
            class="footer__about"
          >
            <strong>Pullcrm</strong> — зручний інструмент <br> автоматизації запису для вашої компанії
          </UiText>

          <div class="footer__payment">
            <UiText
              size="s"
              responsive
            >
              Приймаємо оплату:
            </UiText>
            <img src="/static/img/liqpay.webp" alt="">
          </div>
        </div>
        <div class="footer__column footer__documents">
          <UiText
            strong
            size="m"
            class="footer__column-title"
          >
            Документи
          </UiText>

          <UiText
            v-for="item in documents"
            :key="item.id"
            tag="RouterLink"
            :to="`/documents/${item.slug}/`"
            size="m"
          >
            {{ item.title }}
          </UiText>
        </div>
        <div class="footer__column footer__socials">
          <UiText
            strong
            size="m"
            class="footer__column-title"
          >
            Соціальні мережі
          </UiText>

          <!-- TODO: Add colored icons to social links -->
          <UiText
            tag="a"
            size="m"
            :href="SITE_SOCIAL_TELEGRAM"
            target="_blank"
            left-icon="outlined/telegram-logo"
          >
            Telegram
          </UiText>

          <UiText
            tag="a"
            size="m"
            :href="SITE_SOCIAL_INSTAGRAM"
            target="_blank"
            left-icon="outlined/instagram-logo"
          >
            Instagram
          </UiText>
        </div>
      </div>

      <div class="footer__inner">
        <div class="footer__links" />
      </div>

      <div class="footer__sub-inner" />
    </UiContainer>
  </div>
</template>

<style lang="scss" src="./Footer.scss"></style>
