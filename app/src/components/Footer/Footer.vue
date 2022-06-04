<script lang="ts" setup>
interface IDocumentLink {
  id: number
  slug: string
  title: string
}

interface IProps {
  documents: IDocumentLink[]
}

defineProps<IProps>()
</script>

<template>
  <div class="landing-footer">
    <UiContainer>
      <div class="landing-footer__inner">
        <UiText
          size="m"
          class="landing-footer__about"
        >
          <strong>Pullcrm</strong> — зручний інструмент <br> автоматизації запису для вашої компанії
        </UiText>

        <div class="landing-footer__links">
          <!-- <UiText
            tag="RouterLink"
            to="/faq/"
            size="m"
          >
            FAQ
          </UiText> -->

          <UiText
            tag="a"
            href="https://t.me/pullcrm"
            target="_blank"
            size="m"
          >
            <template #prepend>
              <img
                src="/static/img/t_logo.svg"
                width="18"
                height="18"
                alt="telegram"
              >
            </template>

            Telegram
          </UiText>
        </div>
      </div>

      <div class="landing-footer__sub-inner">
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
    </UiContainer>
  </div>
</template>

<style lang="scss" src="./Footer.scss"></style>
