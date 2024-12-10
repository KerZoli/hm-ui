import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import type { IUser } from '@/types/IUser';
import { toast } from 'vue3-toastify';
import AuthService from '@/services/AuthService';
import type { ILoginForm } from '@/types/form/ILoginForm';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<IUser | null>(null);
    const error = ref<string | undefined>();
    const loading = ref(false);
    const router = useRouter();

    const isAuthenticated = computed(() => !!user.value);
    const isVerified = computed(() => user.value && user.value.is_verified === true);

    function resetStore() {
      user.value = null;
      error.value = undefined;
      loading.value = false;
    }

    async function login(userloginData: ILoginForm) {
      loading.value = true;
      const { axiosError } = await AuthService.initCsrfProtection();

      if (!axiosError) {
        const { data, axiosError } = await AuthService.login(userloginData);
        user.value = data;
        error.value = axiosError?.message;
      }
      loading.value = false;
    }

    async function logout() {
      const { axiosError } = await AuthService.logout();

      if (!axiosError) {
        resetStore();
        router.push({ name: 'login' });
      }
    }

    async function validateEmail(url: string) {
      const { axiosError } = await AuthService.validateEmail(url);

      if (user.value && !axiosError) {
        user.value.is_verified = true;
        toast.success('Successful verification.');
      }
    }

    return {
      login,
      logout,
      resetStore,
      validateEmail,
      user,
      isAuthenticated,
      isVerified,
      error,
      loading
    };
  },
  {
    persist: {}
  }
);
