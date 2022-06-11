<script lang="ts" setup>
interface IProps {
  data: any
  name: string
}

const props = defineProps<IProps>()

const [_componentGroup, componentName] = props.name.split('.').map(toPascalCase)

const AsyncComp = defineAsyncComponent(() =>
  import(`./${componentName}/${componentName}.vue`),
)
</script>

<template>
  <Component
    :is="AsyncComp"
    :data="data"
  />
</template>
