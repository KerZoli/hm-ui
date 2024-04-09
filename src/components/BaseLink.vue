<script setup lang="ts">
  interface BaseLinkProps {
    name: string;
  }

	const props = defineProps<BaseLinkProps>()
</script>
<template>
	<router-link class="router-element" :to="{name}">
		<slot></slot>
	</router-link>
</template>
<style scoped lang="scss">
	.router-element {
		color: $tertiary-text-color;
		text-decoration: underline;
		font-weight: bold;
	}
</style>