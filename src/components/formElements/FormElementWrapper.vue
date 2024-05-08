<script setup lang="ts"></script>
<template>
  <div class="form-element-wrapper">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.form-element-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;

  ::v-deep input,
  ::v-deep textarea,
  ::v-deep select {
    border: 1px solid $input-border-color;
  }
}
</style>
