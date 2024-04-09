<template>
    <section id="login-layout">
        <slot></slot>
    </section>
</template>
<style scoped lang="scss">
    #login-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 350px;
        gap: 20px;
    }
</style>