<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { loginFormRules } from '@/utils/validationRules'

import BaseInput from '@/components/formElements/BaseInput.vue'
import BaseButton from '@/components/formElements/BaseButton.vue'
import BaseLink from '@/components/formElements/BaseLink.vue'

const router = useRouter()

const loginForm = reactive({
  email: '',
  password: ''
})

const v$ = useVuelidate(loginFormRules, loginForm)
const authStore = useAuthStore()
const { error } = storeToRefs(authStore)
const { login } = authStore

const loginUser = async () => {
  const isFormValid = await v$.value.$validate()

  if (isFormValid) {
    await login(loginForm)
    if (!error.value) {
      router.push({ name: 'dashboard' })
    }
  }
}
</script>

<template>
  <section class="login-form">
    <form class="form" @submit.prevent="loginUser">
      <div class="input-elements">
        <BaseInput
          v-model="loginForm.email"
          type="text"
          id="username"
          name="username"
          label="Username"
          :errors="v$.email.$errors"
        />
        <BaseInput
          v-model="loginForm.password"
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
