<script setup lang="ts">
import type { IErrorMsg } from '@/types/form/IErrorMsg';

defineProps<IErrorMsg>();
</script>
<template>
  <span class="error-msg"> {{ errors && errors.length > 0 ? errors[0].$message : '&nbsp;' }}</span>
</template>
<style scoped lang="scss">
.error-msg {
  color: $error-color;
  margin: 5px 0;
  font-size: 0.8em;
}
</style>
