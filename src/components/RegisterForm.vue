<script setup lang="ts">
import BaseButton from './formElements/BaseButton.vue'
import BaseDatePicker from './formElements/BaseDatePicker.vue'
import BaseInput from './formElements/BaseInput.vue'
import BaseTextArea from './formElements/BaseTextArea.vue'
import TwoColumnsLayout from '@/layouts/TwoColumnsLayout.vue'
</script>
<template>
  <form class="register-form">
    <TwoColumnsLayout>
      <template #left>
        <BaseInput type="text" id="username" name="username" label="Username" />
        <BaseInput type="text" id="password" name="password" label="Password" />
        <BaseInput
          type="password"
          id="confirm_password"
          name="confirm_password"
          label="Confirm password"
        />
        <BaseInput type="text" id="email" name="email" label="Email" />
        <BaseInput type="text" id="address" name="address" label="Address" :optional="true" />
      </template>
      <template #right>
        <BaseDatePicker label="Date of Birth" />
        <BaseInput type="text" id="phone" name="phone" label="Phone" />
        <BaseTextArea id="bio" name="bio" label="Bio" :rows="9" :optional="true" />
        <BaseInput
          type="file"
          id="uploader"
          name="uploader"
          label="Profile picture"
          :optional="true"
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
