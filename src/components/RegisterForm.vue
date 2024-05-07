<script setup lang="ts">
import BaseDatePicker from './formInputs/BaseDatePicker.vue'
import BaseInput from './formInputs/BaseInput.vue'
</script>
<template>
  <form class="register-form">
    <div class="field-container">
      <BaseInput type="text" id="username" name="username" label="Username" />
      <BaseInput type="text" id="password" name="password" label="Password" />
      <BaseInput
        type="password"
        id="confirm_password"
        name="confirm_password"
        label="Confirm password"
      />
      <BaseInput type="text" id="email" name="email" label="Email" />
      <BaseInput type="text" id="address" name="address" label="Address" :required="false" />
    </div>
    <div class="field-container">
      <BaseDatePicker label="Date of Birth" />
    </div>
  </form>
</template>
<style scoped lang="scss">
.register-form {
  display: flex;
  justify-content: space-around;

  .field-container {
    width: 500px;
  }
}
</style>
