<script setup lang="ts">
import { userRegisterForm } from '@/composables/useRegisterForm';
import BaseButton from './formElements/BaseButton.vue';
import BaseDatePicker from './formElements/BaseDatePicker.vue';
import BaseInput from './formElements/BaseInput.vue';
import BaseTextArea from './formElements/BaseTextArea.vue';
import TwoColumnsLayout from '@/layouts/TwoColumnsLayout.vue';
import ClientRegisterService from '@/services/ClientRegisterService';

const { form, v$, validateForm } = userRegisterForm();

const handleAvatarChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  form.avatar = input?.files?.[0] || null;
};

const registerUser = async () => {
  const isFormValid = await validateForm();

  if (isFormValid) {
    const { data } = await ClientRegisterService.register(form);
  }
};
</script>
<template>
  <form class="register-form form" @submit.prevent="registerUser">
    <TwoColumnsLayout>
      <template #left>
        <BaseInput
          type="text"
          id="username"
          name="username"
          label="Username"
          v-model="form.username"
          :errors="v$.username.$errors"
        />
        <BaseInput
          type="password"
          id="password"
          name="password"
          label="Password"
          v-model="form.password"
          :errors="v$.password.$errors"
        />
        <BaseInput
          type="password"
          id="confirm_password"
          name="confirm_password"
          label="Confirm password"
          v-model="form.password_confirmation"
          :errors="v$.password_confirmation.$errors"
        />
        <BaseInput
          type="text"
          id="email"
          name="email"
          label="Email"
          v-model="form.email"
          :errors="v$.email.$errors"
        />
        <BaseInput
          type="text"
          id="address"
          name="address"
          label="Address"
          v-model="form.address"
          :optional="true"
        />
      </template>
      <template #right>
        <BaseDatePicker
          label="Date of Birth"
          v-model="form.birth_date"
          :errors="v$.birth_date.$errors"
        />
        <BaseInput
          type="text"
          id="phone"
          name="phone"
          label="Phone"
          v-model="form.phone"
          :errors="v$.phone.$errors"
        />
        <BaseTextArea
          id="bio"
          name="bio"
          label="Bio"
          :rows="9"
          v-model="form.bio"
          :optional="true"
        />
        <BaseInput
          type="file"
          id="uploader"
          name="uploader"
          label="Profile picture"
          :optional="true"
          @change="handleAvatarChange"
        />
        <BaseButton type="submit" variant="primary" id="register">Register</BaseButton>
      </template>
    </TwoColumnsLayout>
  </form>
</template>
<style scoped lang="scss">
#register {
  margin-top: 30px;
  float: right;
}
</style>
