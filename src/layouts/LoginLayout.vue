<template>
  <section id="login-container">
    <div id="login-layout">
      <slot></slot>
    </div>
  </section>
</template>
<style scoped lang="scss">
#login-container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #login-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    gap: 40px;
  }
}
</style>
