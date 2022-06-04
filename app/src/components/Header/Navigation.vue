<script lang="ts" setup>
const route = useRoute()

const navigation = computed(() => {
  return SITE_NAV_ITEMS.map((item) => {
    return {
      ...item,
      isActive: computed(() => {
        if (item.link === '/')
          return route.name === 'home'

        return route.path.includes(item.link)
      }),
    }
  })
})
</script>

<template>
  <div class="landing-navigation">
    <UiText
      v-for="item in navigation"
      :key="item.text"
      tag="RouterLink"
      size="m"
      strong
      :to="item.link"
      :class="{ '_is-active': item.isActive.value }"
    >
      {{ item.text }}
    </UiText>
  </div>
</template>

<style lang="scss">
@mixin navigation-item_active {
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -16px;
    width: 2px;
    background: $ui-blue-brand;
    content: '';
  }

  @media (min-width: $ui-tablet) {
    &::before {
      top: initial;
      left: 0;
      width: 100%;
      height: 2px;
    }
  }
}

.landing-navigation {
  display: flex;
  flex-direction: column;
  margin: -4px 0;

  a {
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 8px 0;

    &._is-active {
      @include navigation-item_active;
    }

    @include ui-hover {
      &:hover {
        @include navigation-item_active;
      }
    }
  }

  @media (min-width: $ui-tablet) {
    flex-direction: row;
    margin: 0 -16px;

    a {
      margin: 0 16px;
      padding: 0;
    }
  }
}
</style>
