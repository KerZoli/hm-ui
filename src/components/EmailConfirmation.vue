<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import fetchData from '@/utils/fetchData'
import { toast } from 'vue3-toastify'
import BaseButton from './formInputs/BaseButton.vue'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

async function resendEmail() {
  const { axiosError } = await fetchData({
    method: 'POST',
    url: 'email/verification-notification'
  })

  if (!axiosError) {
    toast.success('Email verification was sent. Check your email.')
  }
}
</script>
<template>
  <section id="email-confirmation">
    <h3>Verify Your Email</h3>
    <font-awesome-icon icon="fa-regular fa-envelope-open" />
    <p>Check your email for the verification link sent to</p>
    <p>
      <b>{{ user?.email }}</b>
    </p>
    <p>Not in inbox or spam folder?</p>
    <BaseButton type="button" bStyle="primary" @click="resendEmail">Resend</BaseButton>
  </section>
</template>
<style scoped lang="scss">
#email-confirmation {
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
