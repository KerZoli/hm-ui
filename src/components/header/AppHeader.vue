<script setup lang="ts">
import NavigationList from '@/components/header/navigation/NavigationList.vue'
import AppLogo from './AppLogo.vue'
</script>
<template>
  <header>
    <section>
      <AppLogo />
      <NavigationList />
    </section>
  </header>
</template>
<style scoped lang="scss">
header {
  @include bp-large {
    padding: 0 100px;
  }
}
section {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @include bp-large {
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 2px solid $border-color;
  }
}
</style>
