<script setup lang="ts">
import type { IFieldWithLabel } from '@/types/form/IFieldWithLabel'

withDefaults(defineProps<IFieldWithLabel>(), {
  optional: false
})
</script>
<template>
  <div class="field-container">
    <label :for="id">{{ label }} <span v-if="optional"> (optional)</span></label>
    <div class="form-element-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.field-container {
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
  }

  .form-element-wrapper {
    margin-top: 10px;
  }
}
</style>
