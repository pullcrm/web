<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background: #efefef;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
