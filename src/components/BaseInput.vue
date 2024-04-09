<script setup lang="ts">
	interface BaseInputProps {
		id: string;
		name: string;
		label: string;
	}

	const props = defineProps<BaseInputProps>()
</script>

<template>
	<div class="input-container">
		<label :for="name">{{ label }}</label>
		<input type="text" :id="id" :name="name">
	</div>
</template>

<style scoped lang="scss">
	.input-container {
		display: flex;
		flex-direction: column;
		width: 100%;

		label {
			font-weight: bold;
			text-transform: uppercase;
			font-size: 12px;
		}

		input {
			padding: 10px 0;
			margin-top: 10px;
			border: 1px solid gainsboro;
		}
	}
</style>