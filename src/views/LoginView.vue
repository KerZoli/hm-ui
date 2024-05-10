<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import PageTitle from '@/components/PageTitle.vue'
</script>
<template>
  <div id="login-container">
    <div id="login-layout">
      <PageTitle>Welcome to Hotel Reservation System, please login!</PageTitle>
      <LoginForm />
    </div>
  </div>
</template>
<style scoped lang="scss">
#login-container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #login-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    gap: 40px;
  }
}
</style>
