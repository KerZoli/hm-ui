<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
<template>
  <AuthenticatedLayout>
    <p>{{ authStore.user?.name }}</p>
    <p>{{ authStore.user?.email }}</p>
  </AuthenticatedLayout>
</template>
<style lang="scss"></style>
