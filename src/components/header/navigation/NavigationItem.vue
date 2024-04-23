<script setup lang="ts">
interface NavigationItemProps {
  name?: string
}

defineProps<NavigationItemProps>()
</script>
<template>
  <router-link :to="{ name: name }"><slot></slot></router-link>
</template>
<style scoped></style>
