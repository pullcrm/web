<script lang="ts" setup>
import BreadcrumbsItem from './BreadcrumbsItem.vue'

import type { IBreadcrumbsItem } from '~/dto'

interface IProps {
  items: Array<IBreadcrumbsItem>
}

defineProps<IProps>()
</script>

<template>
  <UiFadeScroll
    class="breadcrumbs"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <div class="breadcrumbs__inner">
      <template
        v-for="(item, index) in items"
      >
        <BreadcrumbsItem
          v-if="item.to"
          :key="item.title"
          class="breadcrumbs__item"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <RouterLink
            itemprop="item"
            :to="item.to"
          >
            <span itemprop="name">
              {{ item.title }}
            </span>
          </RouterLink>

          <meta
            itemprop="position"
            :content="String(index + 1)"
          >
        </BreadcrumbsItem>

        <BreadcrumbsItem
          v-else
          :key="item.title + index"
          class="breadcrumbs__item"
        >
          {{ item.title }}
        </BreadcrumbsItem>
      </template>
    </div>
  </UiFadeScroll>
</template>

<style lang="scss" src="./Breadcrumbs.scss"></style>
