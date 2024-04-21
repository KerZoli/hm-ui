<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
<template>
  <p>{{ authStore.user?.name }}</p>
  <p>{{ authStore.user?.email }}</p>
</template>
<style lang="scss"></style>
