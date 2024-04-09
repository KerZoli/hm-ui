<script setup lang="ts">
  type BtnType = 'primary' | 'default';
  
  interface BaseButtonProps {
    type?: BtnType;
    isDisabled?: boolean;
  }

  const props = defineProps<BaseButtonProps>()
</script>
<template>
  <button :class="type" :disabled="isDisabled">
    <slot>
    </slot>
  </button>
</template>
<style scoped lang="scss">
  %button-shared {
    border-radius: 10px;
    padding: 10px 40px;
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