<script setup lang="ts">
import type { IBaseInput } from '@/types/form/IBaseInput'
import { computed } from 'vue'
import ErrorMsg from './ErrorMsg.vue'
import FormElementWrapper from './FormElementWrapper.vue'
import FormElementLabel from './FormElementLabel.vue'

const props = withDefaults(defineProps<IBaseInput>(), {
  optional: false
})

const hasError = computed(() => props.errors && props.errors.length)
const model = defineModel()
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <FormElementWrapper>
    <FormElementLabel :id="String($attrs.id)" :label="label" :optional="optional" v-if="label" />
    <input v-model="model" v-bind="$attrs" :class="{ error: hasError }" />
    <ErrorMsg :errors="errors" />
  </FormElementWrapper>
</template>

<style scoped lang="scss">
input {
  padding: 14px 5px;
}
</style>
