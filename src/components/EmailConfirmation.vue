<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import BaseButton from './BaseButton.vue'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>
<template>
  <div class="email-verification-container">
    <h3>Verify Your Email</h3>
    <font-awesome-icon icon="fa-regular fa-envelope-open" />
    <p>Check your email for the verification link sent to</p>
    <p>
      <b>{{ user?.email }}</b>
    </p>
    <p>Not in inbox or spam folder?</p>
    <BaseButton type="button" bStyle="primary">Resend</BaseButton>
  </div>
</template>
<style scoped lang="scss">
.email-verification-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: $secondary-background-color;
  margin-top: 100px;

  .fa-envelope-open {
    font-size: 70px;
    color: $tertiary-text-color;
  }
}
</style>
