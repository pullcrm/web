<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

import { useApi } from '~/composables/api'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  comment: '',
})

const error = reactive({
  field: null,
  error: null,
})

const isLoading = ref(false)

const onSubmit = async() => {
  if (!form.name.trim()) {
    error.field = 'name'
    error.error = 'Введіть свое імʼя'

    return
  }

  if (!form.phone.trim() && !form.email.trim()) {
    error.field = 'phone'
    error.error = 'Введіть номер телефону'

    return
  }

  try {
    isLoading.value = true

    const { data } = await useApi('support').post(form).json()

    isLoading.value = false

    const { error: resultError } = data.value

    if (resultError) {
      error.field = resultError.fieldName
      error.error = resultError.message
    }
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="contacts-page-customer-form">
    <UiPanel
      class="contacts-page-customer-form__panel"
      size="m"
    >
      <UiTitle
        tag="h1"
        class="contacts-page-customer-form__title"
        size="l"
      >
        Залишились питання? <br> Дай нам знати.
      </UiTitle>

      <UiText
        class="contacts-page-customer-form__subtitle"
        size="m"
      >
        Є питання чи коментарі по роботі pullcrm? Скористайся формою для звʼязку з нами.
      </UiText>
    </UiPanel>

    <form
      class="contacts-page-customer-form__form"
      @submit.prevent="onSubmit"
    >
      <UiField
        label="Ім'я"
        :error="error.field === 'name' && error.error"
      >
        <UiInput
          id="name"
          v-model="form.name"
          name="name"
        />
      </UiField>

      <UiField
        label="Телефон"
        :error="error.field === 'phone' && error.error"
      >
        <UiInput
          id="phone"
          v-model="form.phone"
          name="phone"
        />
      </UiField>

      <UiField
        label="Email"
        :error="error.field === 'email' && error.error"
      >
        <UiInput
          id="email"
          v-model="form.email"
          name="email"
          type="email"
        />
      </UiField>

      <UiField
        label="Ваше питання"
        :error="error.comment === 'email' && error.error"
      >
        <UiInput
          v-model="form.comment"
          tag="textarea"
        />
      </UiField>

      <UiButton
        size="m"
        type="submit"
        theme="blue"
        :loading="isLoading"
      >
        Відправити
      </UiButton>
    </form>
  </div>
</template>

<style lang="scss">
  .contacts-page-customer-form {
    position: relative;

    &__panel {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      color: $ui-white;
      text-align: center;
      background-image: url('/static/img/contacts-bg.jpeg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      min-height: 485px;
    }

    &__subtitle {
      margin-top: 8px;
      opacity: 0.8;
      max-width: 320px;
    }

    &__form {
      @include ui-shadow-16;

      width: calc(100% - 34px);
      margin: -280px auto 0;
      padding: 32px;
      background-color: $ui-white;
      border-radius: 16px;

      .ui-field + .ui-field {
        margin-top: 16px;
      }

      .ui-button {
        margin-top: 16px;
        width: 100%;
      }
    }

    @media (min-width: $ui-laptop) {
      &__panel {
        justify-content: center;
        align-items: flex-start;
        text-align: left;
      }

      &__form {
        position: absolute;
        top: 32px;
        right: 32px;
        width: 400px;
        margin: 0;
      }
    }
  }
</style>
