<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
import MainContainer from './partials/MainContainer.vue'
</script>
<template>
  <AppHeader />
  <MainContainer>
    <RouterView />
  </MainContainer>
</template>
<style scoped lang="scss"></style>
