<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue';
import BaseLink from '../components/BaseLink.vue';
import BaseInput from '../components/BaseInput.vue';
import LoginLayout from '../layouts/LoginLayout.vue';

const submit = () => console.log('Submit clicked');

</script>
<template>
  <LoginLayout>
      <BaseInput id="username" name="username" label="Username"></BaseInput>
      <BaseInput id="password" name="pasword" label="Password"></BaseInput>
    <div class="action-buttons">
      <div class="flex-item link">
        <BaseLink class="flex-item" name="register">Register</BaseLink>
      </div>
      <div class="flex-item">
        <BaseButton type="primary" @click="submit">Login</BaseButton>
      </div>
    </div>
  </LoginLayout>
</template>
<style lang="scss">
  .action-buttons {
    display: flex;
    width: 100%;
    text-align: right;

    .flex-item {
      flex-grow: 1;
    }

    .link {
      align-self: center;
    }
  }
</style> 