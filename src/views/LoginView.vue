<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue';
</script>
<template>
  <h1>Learn Easy Code</h1>
  <BaseButton type="default">Edit</BaseButton>
  <BaseButton type="primary">Submit</BaseButton>
</template>
<style lang="scss">
  h1 {
    color: $primary-color;        
  }
</style>