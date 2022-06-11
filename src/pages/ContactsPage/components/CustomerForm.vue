<script lang="ts" setup>
import { useGlobalApi } from '~/composables/api'

const isFormSubmitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  comment: '',
})

const error = reactive<any>({
  field: null,
  error: null,
})

const isLoading = ref(false)

const onSubmit = async () => {
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

    const { data } = await useGlobalApi('support').post(form).json()

    isLoading.value = false

    const { error: resultError } = data.value

    if (resultError) {
      error.field = resultError.fieldName
      error.error = resultError.message
    }
    else {
      form.name = ''
      form.email = ''
      form.phone = ''
      form.comment = ''

      error.field = ''
      error.error = ''

      isFormSubmitted.value = true
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
          @input="isFormSubmitted = false"
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
          @input="isFormSubmitted = false"
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
          @input="isFormSubmitted = false"
        />
      </UiField>

      <UiField
        label="Ваше питання"
        :error="error.field === 'comment' && error.error"
      >
        <UiInput
          v-model="form.comment"
          tag="textarea"
          @input="isFormSubmitted = false"
        />
      </UiField>

      <UiText
        v-if="isFormSubmitted"
        size="l"
        strong
        responsive
        class="contacts-page-customer-form__submitted-text"
      >
        Форма успішно відправлена
      </UiText>

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
      min-height: 485px;
      color: $ui-white;
      text-align: center;
      background-image: url('/static/img/contacts-bg.jpeg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border: none;
    }

    &__subtitle {
      max-width: 320px;
      margin-top: 8px;
      opacity: 0.8;
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
        width: 100%;
        margin-top: 16px;
      }
    }

    &__submitted-text {
      margin-top: 16px;
      color: $ui-green-brand;
      text-align: center;
    }

    @media (min-width: $ui-laptop) {
      &__panel {
        align-items: flex-start;
        justify-content: center;
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
