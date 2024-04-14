<script setup lang="ts">
	import { reactive } from 'vue';

	import BaseInput from '@/components/BaseInput.vue';
	import BaseButton from '@/components/BaseButton.vue';
	import BaseLink from '@/components/BaseLink.vue';
	
	import { useAuthStore } from '@/stores/auth';

	const userForm = reactive({
		email: '',
		password: ''
	});
	
	const authStore = useAuthStore();	

	const login = () => {
		authStore.login(userForm);
	}

</script>

<template>
  <section class="login-form">
		<div class="input-elements">
			<BaseInput v-model="userForm.email" type="text" id="username" name="username" label="Username"></BaseInput>
			<BaseInput v-model="userForm.password" type="password" id="password" name="pasword" label="Password"></BaseInput>
		</div>
		<p>Don't have an account? Please <router-link :to="{name: 'register'}">register</router-link>.</p>
		<div class="action-buttons">
			<div class="flex-item link">
				<BaseLink class="flex-item" name="register">Register</BaseLink>
			</div>
			<div class="flex-item">
				<BaseButton type="primary" @click="login">Login</BaseButton>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.login-form {
		width: 100%;

		.input-elements {
			display: flex;
			flex-direction: column;
			gap: 25px;
		}

		.action-buttons {
			display: flex;
			text-align: right;
			margin-top: 50px;

			.flex-item {
				flex-grow: 1;
			}

			.link {
				align-self: center;
			}
  	}
	}

</style>