<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import PageTitle from '@/components/PageTitle.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
</script>
<template>
  <LoginLayout>
    <PageTitle>Welcome to Hotel Reservation System, please login!</PageTitle>
    <LoginForm />
  </LoginLayout>
</template>
