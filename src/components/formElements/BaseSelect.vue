<script setup lang="ts">
import { computed } from 'vue'

import type { IBaseSelect } from '@/types/form/IBaseSelect'
import ErrorMsg from './ErrorMsg.vue'
import FormElementWrapper from './FormElementWrapper.vue'
import FormElementLabel from './FormElementLabel.vue'

const props = withDefaults(defineProps<IBaseSelect>(), {
  displayErrors: true
})
const model = defineModel()
const hasError = computed(() => props.errors && props.errors.length)

defineOptions({
  inheritAttrs: false
})
</script>
<template>
  <FormElementWrapper>
    <FormElementLabel :id="String($attrs.id)" :label="label" :optional="optional" v-if="label" />
    <select v-model="model" v-bind="$attrs" :class="{ error: hasError }">
      <option :value="null" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <ErrorMsg v-if="displayErrors" />
  </FormElementWrapper>
</template>
<style scoped lang="scss">
select {
  padding: 8px;
  background-color: #ffffff;
}
</style>
