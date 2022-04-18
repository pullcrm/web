<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import { useRoute, useData } from 'vitepress'

import { isSideBarEmpty, getSideBarConfig } from 'vitepress/dist/client/theme-default/support/sideBar'

// components
import Page from 'vitepress/dist/client/theme-default/components/Page.vue'
import SideBar from 'vitepress/dist/client/theme-default/components/SideBar.vue'

import NavBar from '../components/NavBar/NavBar.vue'
import Footer from '../components/Footer/Footer.vue'

import Container from '../ui/Container.vue'

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
  if (frontmatter.value.sidebar === false) {
    return false
  }

  return !isSideBarEmpty(
    getSideBarConfig(theme.value.sidebar, route.data.relativePath)
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
      'no-sidebar': !showSidebar.value
    }
  ]
})
</script>

<template>
  <div class="theme" :class="pageClasses">
    <NavBar
      class="theme__navbar"
      @toggle="toggleSidebar"
    />

    <SideBar :open="openSideBar" />

    <!-- TODO: make this button accessible -->
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <main
      v-if="isCustomLayout"
      class="theme__custom"
    >
      <Container>
        <Content />

        <!-- TODO: Move footer to the end -->
        <Footer
          class="theme__footer"
        />
      </Container>
    </main>

    <Page v-else>
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>

  <Debug />
</template>

<style lang="scss">
.theme {
  &__navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }

  &__footer {
    margin-top: 44px;
  }

  &__custom {
    padding-top: var(--header-height);
  }
}
</style>
