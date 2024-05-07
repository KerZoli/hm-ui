<script setup lang="ts">
import type { IBaseSelect } from '@/types/form/IBaseSelect'

const props = defineProps<IBaseSelect>()
const model = defineModel()
</script>
<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <select :id="id" :name="name" v-model="model">
    <option :value="null" disabled selected hidden>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
<style scoped lang="scss">
select {
  padding: 8px;
  border: 1px solid $input-border-color;
  background-color: #ffffff;
}
</style>
