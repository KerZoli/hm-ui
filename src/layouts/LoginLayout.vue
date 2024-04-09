<template>
  <section id="login-container">
    <div id="login-layout">
      <slot></slot>
    </div>
</section>
</template>
<style scoped lang="scss">
  #login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    #login-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 350px;
      gap: 20px;
    }
  }
</style>