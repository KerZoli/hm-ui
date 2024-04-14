<script setup lang="ts">
	import { reactive } from 'vue';
	import { useVuelidate } from '@vuelidate/core'
	import { useAuthStore } from '@/stores/auth';
	import { loginFormRules } from '@/utils/validationRules';
	
	import BaseInput from '@/components/BaseInput.vue';
	import BaseButton from '@/components/BaseButton.vue';
	import BaseLink from '@/components/BaseLink.vue';
	
	const loginForm = reactive({
		email: '',
		password: ''
	});
	
	const v$ = useVuelidate(loginFormRules, loginForm);
	const authStore = useAuthStore();	

	const login = async () => {
		const isFormValid = await v$.value.$validate();

		if (isFormValid) {
			authStore.login(loginForm);
		}
	}

</script>

<template>
  <section class="login-form" >
		<form class="form" @submit.prevent="login">
			<div class="input-elements">
				<BaseInput 
					v-model="loginForm.email" 
					type="text" id="username" 
					name="username" 
					label="Username" 
					:errors="v$.email.$errors" />
				<BaseInput 
					v-model="loginForm.password" 
					type="password" 
					id="password" 
					name="pasword" 
					label="Password" 
					:errors="v$.password.$errors" />
			</div>
			<p>Don't have an account? Please <router-link :to="{name: 'register'}">register</router-link>.</p>
			<div class="action-buttons">
				<div class="flex-item link">
					<BaseLink class="flex-item" name="register">Register</BaseLink>
				</div>
				<div class="flex-item">
					<BaseButton type="primary">Login</BaseButton>
				</div>
			</div>
		</form>
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