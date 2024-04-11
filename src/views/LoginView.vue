<script setup lang="ts">
  import LoginLayout from '../layouts/LoginLayout.vue';
  import PageTitle from '../components/PageTitle.vue';
  import LoginForm from '../components/LoginForm.vue';
</script>
<template>
  <LoginLayout>
    <PageTitle>Welcome to Hotel Management System, please login!</PageTitle>
    <LoginForm />
  </LoginLayout>
</template>