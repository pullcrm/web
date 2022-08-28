<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: 'l',
  },

  responsive: {
    type: Boolean,
    default: false,
  },

  page: {
    type: Number,
    required: true,
  },

  pageSize: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },

  pageRangeSize: {
    type: Number,
    default: 4,
  },

  pageCount: {
    type: Number,
    default: 0,
  },
})

// readonly page: number
// readonly total: number
// readonly pageSize: number
// readonly pageRangeSize: number

const route = useRoute()
const router = useRouter()

const actualPageRangeSize = computed(() => {
  return Math.min(props.pageCount, props.pageRangeSize)
})

const pageRangeOffset = computed(() => {
  const meanOfRange = Math.ceil(actualPageRangeSize.value / 2)

  if (props.page <= meanOfRange)
    return 1

  if (props.page > props.pageCount - meanOfRange)
    return props.pageCount - actualPageRangeSize.value + 1

  return props.page - meanOfRange + 1
})

const pageRange = computed(() => {
  return Array.from({ length: actualPageRangeSize.value }, (_value, index) => {
    return pageRangeOffset.value + index
  })
})

const atStart = computed(() => {
  return pageRange.value.includes(1)
})

const atEnd = computed(() => {
  return pageRange.value.includes(props.pageCount)
})

const isLastPage = computed(() => {
  return props.page === props.pageCount
})

const isFirstPage = computed(() => {
  return props.page === 1
})

function isActivePage(page: number) {
  return props.page === page
}

async function onChangePage(event: Event, page: number) {
  // TODO: Enable this after migration to Nuxt
  // event.preventDefault()

  // await router.push(
  //   getPagePath(page),
  // )
}

function getPagePath(page: number) {
  const { href } = router.resolve({
    path: route.path,
    query: {
      ...route.query,
      page: page > 1 ? page : undefined,
    },
  })

  return href
}
</script>

<template>
  <div
    v-if="pageCount > 1"
    class="ui-pagination"
    :class="[
      `ui-pagination_size_${size}`,
      { 'ui-pagination_responsive': responsive },
    ]"
  >
    <div
      class="ui-pagination__pages"
      data-test="ui-pagination"
    >
      <!-- Prev -->
      <span
        v-if="isFirstPage"
        class="ui-pagination__prev _disabled"
      >
        <UiIcon
          name="outlined/caret-left-small"
          size="custom"
        />
      </span>
      <a
        v-else
        data-test="prev"
        class="ui-pagination__prev"
        :href="getPagePath(page - 1)"
        @click="onChangePage($event, page - 1)"
      >
        <UiIcon
          name="outlined/caret-left-small"
          size="custom"
        />
      </a>

      <!-- Items -->
      <div class="ui-pagination__items">
        <a
          v-if="!atStart"
          class="ui-pagination__item"
          :class="{ _active: isActivePage(1) }"
          :href="getPagePath(1)"
          @click="onChangePage($event, 1)"
        >
          1
        </a>

        <span
          v-if="!atStart"
          class="ui-pagination__item"
        >
          ...
        </span>

        <a
          v-for="p in pageRange"
          :key="p"
          class="ui-pagination__item"
          :class="{ _active: isActivePage(p) }"
          :href="getPagePath(p)"
          @click="onChangePage($event, p)"
        >
          {{ p }}
        </a>

        <span
          v-if="!atEnd"
          class="ui-pagination__item"
        >
          ...
        </span>

        <a
          v-if="!atEnd"
          class="ui-pagination__item"
          :class="{ _active: isActivePage(pageCount) }"
          :href="getPagePath(pageCount)"
          @click="onChangePage($event, pageCount)"
        >
          {{ pageCount }}
        </a>
      </div>

      <!-- Next -->
      <span
        v-if="isLastPage"
        class="ui-pagination__next _disabled"
      >
        <UiIcon
          name="outlined/caret-right-small"
          size="custom"
        />
      </span>
      <a
        v-else
        data-test="next"
        class="ui-pagination__next"
        :href="getPagePath(page + 1)"
        @click="onChangePage($event, page + 1)"
      >
        <UiIcon
          name="outlined/caret-right-small"
          size="custom"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" src="./Pagination.scss"></style>
