<script setup lang="ts">
interface NavigationItemProps {
  name?: string
}

defineProps<NavigationItemProps>()
</script>
<template>
  <RouterLink :to="{ name: name }"><slot></slot></RouterLink>
</template>
<style scoped lang="scss">
a {
  text-decoration: none;
  color: $primary-text-color;
}
</style>
