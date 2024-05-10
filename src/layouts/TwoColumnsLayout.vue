<template>
  <div class="two-columns-layout layout-container">
    <div class="left content">
      <slot name="left"></slot>
    </div>
    <div class="right content">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include bp-large {
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  }

  .content {
    width: 100%;
    @include bp-large {
      width: 40%;
    }
  }
}
</style>
