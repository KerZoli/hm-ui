<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import NavigationItem from './NavigationItem.vue'

const { logout } = useAuthStore()
</script>
<template>
  <nav class="navigation">
    <NavigationItem name="dashboard">Dashboard</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem @click="logout">Logout</NavigationItem>
  </nav>
</template>
<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @include bp-large {
    flex-direction: row;
    gap: 50px;
  }
}
</style>
