<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
</script>
<template>
  <AppHeader />
  <section id="main-container">
    <slot></slot>
  </section>
</template>
<style scoped lang="scss">
#main-container {
  max-width: 1280px;
  margin: 0 auto;

  @include bp-large {
    padding-top: 150px;
  }
}
</style>
