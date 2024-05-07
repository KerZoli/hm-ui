<script setup lang="ts">
import type { IBaseInput } from '@/types/form/IBaseInput'
import { computed } from 'vue'

const props = defineProps<IBaseInput>()
const hasError = computed(() => props.errors && props.errors.length)
const model = defineModel()
</script>

<template>
  <div class="input-container">
    <input v-model="model" :type="type" :id="id" :name="name" :class="{ error: hasError }" />
    <span class="error-msg"> {{ hasError ? errors![0].$message : '&nbsp;' }}</span>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 10px 5px 10px;
    border: 1px solid $input-border-color;
  }
}
</style>
