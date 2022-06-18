<script lang="ts" setup>
import Opportunity from './Opportunity.vue'
</script>

<template>
  <div class="home-page-opportunities">
    <UiTitle
      tag="h2"
      size="m"
      class="home-page-opportunities__title"
    >
      Можливості та переваги
    </UiTitle>

    <div class="home-page-opportunities__inner">
      <Opportunity
        icon="solid/calendar-fill"
        color="#3C8AFF"
        title="Електронний календар"
        description="Створення запису, додавання запису в чергу, закриття запису"
      />

      <Opportunity
        icon="solid/moon-stars-fill"
        color="#705BCF"
        title="Онлайн запис 24/7"
        description="Завжди доступний для використання"
      />

      <Opportunity
        icon="solid/chart-bar-fill"
        color="#6ACEEE"
        title="Статистика и аналітика"
        description="Перегляд даних про записи та аналіз фінансів"
      />

      <Opportunity
        icon="solid/chat-dots-fill"
        color="#4DBD71"
        title="СМС оповіщення"
        description="Повідомте вашим клієнтам про статус запису"
      />

      <Opportunity
        icon="solid/buildings-fill"
        color="#FD983A"
        title="Безмежна кількість компаній"
        description="Керуйте філіями та співробітниками без обмежень"
      />

      <Opportunity
        icon="solid/user-circle-fill"
        color="#FDBE3A"
        title="Персональний кабінет співробітника"
        description="Перегляд записів, приклади робіт, вибір послуг"
      />
    </div>
  </div>
</template>

<style lang="scss" src="./Opportunities.scss"></style>
