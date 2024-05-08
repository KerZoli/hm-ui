<script setup lang="ts">
import type { IFieldWithLabel } from '@/types/form/IFieldWithLabel'

withDefaults(defineProps<IFieldWithLabel>(), {
  optional: false
})
</script>
<template>
  <label :for="id">{{ label }} <span v-if="optional"> (optional)</span></label>
</template>
<style scoped lang="scss">
label {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
