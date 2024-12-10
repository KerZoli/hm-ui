<script setup lang="ts">
import { computed } from 'vue';
import type { IBaseTextArea } from '@/types/form/IBaseTextArea';
import ErrorMsg from './ErrorMsg.vue';
import FormElementWrapper from './FormElementWrapper.vue';
import FormElementLabel from './FormElementLabel.vue';

const props = defineProps<IBaseTextArea>();
const hasError = computed(() => props.errors && props.errors.length);

defineOptions({
  inheritAttrs: false
});
const model = defineModel<string>();
</script>
<template>
  <FormElementWrapper>
    <FormElementLabel :id="String($attrs.id)" :label="label" :optional="optional" v-if="label" />
    <textarea v-bind="$attrs" v-model="model" :class="{ error: hasError }"></textarea>
    <ErrorMsg :errors="errors" />
  </FormElementWrapper>
</template>
<style scoped lang="scss"></style>
