<script setup lang="ts">
import type { IBaseTextArea } from '@/types/form/IBaseTextArea'
import ErrorMsg from './ErrorMsg.vue'
import FormElementWrapper from './FormElementWrapper.vue'
import FormElementLabel from './FormElementLabel.vue'

defineProps<IBaseTextArea>()
defineOptions({
  inheritAttrs: false
})
</script>
<template>
  <FormElementWrapper>
    <FormElementLabel :id="String($attrs.id)" :label="label" :optional="optional" v-if="label" />
    <textarea v-bind="$attrs"></textarea>
    <ErrorMsg :errors="errors" />
  </FormElementWrapper>
</template>
<style scoped lang="scss"></style>
