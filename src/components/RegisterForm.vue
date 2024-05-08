<script setup lang="ts">
import BaseDatePicker from './formElements/BaseDatePicker.vue'
import BaseInput from './formElements/BaseInput.vue'
import BaseTextArea from './formElements/BaseTextArea.vue'
</script>
<template>
  <form class="register-form">
    <div class="field-wrapper">
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
    </div>
    <div class="field-wrapper">
      <BaseDatePicker label="Date of Birth" />
      <BaseInput type="text" id="phone" name="phone" label="Phone" />
      <BaseTextArea id="bio" name="bio" label="Bio" :rows="8" :optional="true" />
      <BaseInput
        type="file"
        id="uploader"
        name="uploader"
        label="Profile picture"
        :optional="true"
      />
    </div>
  </form>
</template>
<style scoped lang="scss">
.register-form {
  display: flex;
  justify-content: space-around;

  .field-wrapper {
    width: 500px;
  }
}
</style>
