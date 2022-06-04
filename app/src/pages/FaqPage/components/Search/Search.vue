<script lang="ts" setup>
const emit = defineEmits(['input'])

const route = useRoute()
const router = useRouter()

const query = computed(() => {
  return route.query.q || ''
})

const onInput = debounce(async (value) => {
  await router.replace({
    query: {
      q: value || undefined,
    },
  })

  emit('input')
}, 600)
</script>

<template>
  <div class="faq-page-search">
    <UiContainer>
      <div class="faq-page-search__inner">
        <UiInput
          left-icon="outlined/magnifying-glass"
          placeholder="Шукати інформацію по розділу"
          :model-value="query"
          @update:model-value="onInput"
        />
      </div>
    </UiContainer>
  </div>
</template>

<style lang="scss">
.faq-page-search {
  padding: 44px 0;
  color: $ui-white;
  /* Created with https://www.css-gradient.com */
  background: #575587;
  background: -webkit-linear-gradient(top left, #575587, #437BC6);
  background: -moz-linear-gradient(top left, #575587, #437BC6);
  background: linear-gradient(to bottom right, #575587, #437BC6);
  box-shadow: inset 0 0 24px 0px rgb(0, 0, 0, 0.3);

  &__inner {
    .ui-input {
      &__prepend {
        top: 16px;
      }

      input {
        height: 52px;
      }
    }
  }

  @include ui-mobile-only {
    padding: 24px 0;
  }
}
</style>
