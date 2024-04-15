<script setup lang="ts">
	import { computed } from 'vue';
	import type { ErrorObject } from '@vuelidate/core';

	type InputType = 'text' | 'password';
	
	interface BaseInputProps {
		id: string;
		name: string;
		label: string;
		type: InputType;
		errors?: ErrorObject[]; 
	}
	const props = defineProps<BaseInputProps>()
	const hasError = computed(() => props.errors && props.errors.length)
	const model = defineModel()
</script>

<template>
	<div class="input-container">
		<label :for="name">{{ label }}</label>
		<input v-model="model" :type="type" :id="id" :name="name" :class="{error: hasError}">
		<span class="error-msg"> {{ hasError ? errors![0].$message : '&nbsp;' }}</span>
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
			padding: 10px 5px 10px;
			margin-top: 10px;
			border: 1px solid gainsboro;
		}
	}
</style>