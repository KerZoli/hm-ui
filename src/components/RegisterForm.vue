<script setup lang="ts">
import BaseDatePicker from './formInputs/BaseDatePicker.vue'
import BaseInput from './formInputs/BaseInput.vue'
import FieldWithLabel from './formInputs/FieldWithLabel.vue'
</script>
<template>
  <form class="register-form">
    <div class="field-container">
      <FieldWithLabel id="username" label="username"
        ><BaseInput type="text" id="username" name="username"
      /></FieldWithLabel>

      <FieldWithLabel id="password" label="password">
        <BaseInput type="text" id="password" name="password" />
      </FieldWithLabel>
      <FieldWithLabel id="confirm_password" label="Confirm password">
        <BaseInput
          type="password"
          id="confirm_password"
          name="confirm_password"
          label="Confirm password"
        />
      </FieldWithLabel>
      <FieldWithLabel id="email" label="Email">
        <BaseInput type="text" id="email" name="email" label="Email" />
      </FieldWithLabel>
      <FieldWithLabel id="address" label="Address" :optional="true">
        <BaseInput type="text" id="address" name="address" label="Address" :required="false" />
      </FieldWithLabel>
    </div>
    <div class="field-container">
      <FieldWithLabel id="day" label="Date of Birth">
        <BaseDatePicker />
      </FieldWithLabel>
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
