<script setup lang="ts">
import type { IBaseButton } from '@/types/form/IBaseButton'

defineProps<IBaseButton>()
</script>
<template>
  <button :class="variant">
    <slot> </slot>
  </button>
</template>
<style scoped lang="scss">
%button-shared {
  border-radius: 6px;
  padding: 15px 60px;
  border: none;
  cursor: pointer;
}

.primary {
  @extend %button-shared;
  background-color: $primary-color;
  color: $secondary-text-color;
}

.default {
  @extend %button-shared;
  color: $tertiary-text-color;
  border-color: $primary-color;
  background-color: $secondary-color;
}
</style>
