<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import NavigationItem from './NavigationItem.vue'

const { logout } = useAuthStore()
</script>
<template>
  <nav class="navigation">
    <NavigationItem name="dashboard">Home</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem @click="logout">Logout</NavigationItem>
  </nav>
</template>
<style scoped lang="scss">
.navigation {
  display: flex;
  gap: 20px;
}
</style>
