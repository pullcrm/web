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
  width: 500px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  background: #efefef;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 4px;
}
</style>
