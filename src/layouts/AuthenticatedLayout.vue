<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
</script>
<template>
  <AppHeader />
  <section id="content">
    <slot></slot>
  </section>
</template>
<style scoped lang="scss">
#content {
  max-width: 1268px;
  margin: 0 auto;
}
</style>
