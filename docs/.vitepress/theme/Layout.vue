<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

import { getSideBarConfig, isSideBarEmpty } from 'vitepress/dist/client/theme-default/support/sideBar'

// components
import Page from 'vitepress/dist/client/theme-default/components/Page.vue'
import SideBar from 'vitepress/dist/client/theme-default/components/SideBar.vue'

import NotFound from '../pages/NotFound/NotFound.vue'

import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'

// generic state
const route = useRoute()
const { site, page, theme, frontmatter } = useData()

// custom layout
const isCustomLayout = computed(() => !!frontmatter.value.customLayout)

// automatic multilang check for AlgoliaSearchBox
const isMultiLang = computed(() => Object.keys(site.value.langs).length > 1)

// sidebar
const openSideBar = ref(false)

const showSidebar = computed(() => {
  if (frontmatter.value.sidebar === false)
    return false

  return !isSideBarEmpty(
    getSideBarConfig(theme.value.sidebar, route.data.relativePath),
  )
})

const toggleSidebar = (to?: boolean) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value
}

const hideSidebar = toggleSidebar.bind(null, false)
// close the sidebar when navigating to a different location
watch(route, hideSidebar)
// TODO: route only changes when the pathname changes
// listening to hashchange does nothing because it's prevented in router

// page classes
const pageClasses = computed(() => {
  return [
    {
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value,
    },
  ]
})
</script>

<template>
  <div class="theme" :class="pageClasses">
    <Header
      class="theme__header"
      @toggle="toggleSidebar"
    />

    <main
      v-if="isCustomLayout"
      class="theme__custom"
    >
      <UiContainer>
        <Content />
      </UiContainer>

      <!-- TODO: Move footer to the end -->
      <Footer
        class="theme__footer"
      />
    </main>

    <template v-else-if="page.title === '404'">
      <UiContainer>
        <NotFound />
      </UiContainer>

      <!-- TODO: Move footer to the end -->
      <Footer
        class="theme__footer"
      />
    </template>

    <div
      v-else
      :class="{ 'has-sidebar': showSidebar }"
    >
      <SideBar :open="openSideBar" />

      <!-- TODO: make this button accessible -->
      <div class="sidebar-mask" @click="toggleSidebar(false)" />

      <Page>
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </div>
  </div>

  <Debug />
</template>

<style lang="scss">
.theme {
  &__footer {
    margin-top: 44px;
  }
}
</style>
