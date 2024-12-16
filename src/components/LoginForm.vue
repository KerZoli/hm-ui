<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

import BaseInput from '@/components/formElements/BaseInput.vue';
import BaseButton from '@/components/formElements/BaseButton.vue';
import BaseLink from '@/components/formElements/BaseLink.vue';
import { useLoginForm } from '@/composables/useLoginForm';

const { form, v$, validateForm } = useLoginForm();

const router = useRouter();

const authStore = useAuthStore();
const { error } = storeToRefs(authStore);
const { login } = authStore;

const loginUser = async () => {
  const isFormValid = await validateForm();
  if (isFormValid) {
    await login(form);
    if (!error.value) {
      router.push({ name: 'dashboard' });
    }
  }
};
</script>

<template>
  <section class="login-form">
    <form class="form" @submit.prevent="loginUser">
      <div class="input-elements">
        <BaseInput
          v-model="form.username"
          type="text"
          id="username"
          name="username"
          label="Username"
          :errors="v$.username.$errors"
        />
        <BaseInput
          v-model="form.password"
          type="password"
          id="password"
          name="pasword"
          label="Password"
          :errors="v$.password.$errors"
        />
      </div>
      <p>
        Don't have an account? Please
        <router-link :to="{ name: 'register' }">register</router-link>.
      </p>
      <div class="action-buttons">
        <div class="flex-item link">
          <BaseLink class="flex-item" name="register">Register</BaseLink>
        </div>
        <div class="flex-item">
          <BaseButton type="submit" variant="primary">Login</BaseButton>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
.login-form {
  width: 100%;

  .input-elements {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .action-buttons {
    display: flex;
    text-align: right;
    margin-top: 50px;

    .flex-item {
      flex-grow: 1;
    }

    .link {
      align-self: center;
    }
  }
}
</style>
