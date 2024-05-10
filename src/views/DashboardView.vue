<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

import EmailConfirmation from '@/components/EmailConfirmation.vue'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>
<template>
  <section id="dashboard-section">
    <h2>Welcome,</h2>
    <p>{{ user?.name }}</p>
  </section>
  <EmailConfirmation v-if="!user?.is_verified" />
</template>
<style lang="scss">
#dashboard-section {
  display: flex;
  align-items: center;
  flex-direction: column;

  @include bp-large {
    padding-top: 150px;
  }
}
</style>
