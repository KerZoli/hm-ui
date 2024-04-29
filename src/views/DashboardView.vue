<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
<template>
  <AuthenticatedLayout>
    <section id="dashboard-section">
      <h2>Welcome</h2>
      <p>{{ authStore.user?.name }}</p>
      <p>{{ authStore.user?.email }}</p>
    </section>
  </AuthenticatedLayout>
</template>
<style lang="scss">
#dashboard-section {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
