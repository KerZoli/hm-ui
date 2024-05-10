import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'

import type { IUserLoginData } from '@/types/IUserLoginData'
import type { IUser } from '@/types/IUser'
import fetchData from '@/utils/fetchData'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<IUser | null>(null)
    const error = ref<string | undefined>()
    const loading = ref(false)
    const router = useRouter()

    const isAuthenticated = computed(() => !!user.value)
    const isVerified = computed(() => user.value && user.value.is_verified === true)

    function initCsrfProtection() {
      return fetchData(
        {
          url: '/sanctum/csrf-cookie'
        },
        false
      )
    }

    function sendLogin(userloginData: IUserLoginData) {
      return fetchData<IUserLoginData, IUser>({
        method: 'POST',
        url: 'login?XDEBUG_SESSION_START=PHPSTORM',
        data: userloginData
      })
    }

    function resetStore() {
      user.value = null
      error.value = undefined
      loading.value = false
    }

    async function login(userloginData: IUserLoginData) {
      loading.value = true
      const { axiosError } = await initCsrfProtection()
      if (!axiosError) {
        const { data, axiosError } = await sendLogin(userloginData)
        user.value = data
        error.value = axiosError?.message
      }
      loading.value = false
    }

    async function logout() {
      await fetchData({
        method: 'POST',
        url: 'logout'
      })

      resetStore()
      router.push({ name: 'login' })
    }

    async function validateEmail(url: string) {
      const { axiosError } = await fetchData({
        method: 'GET',
        url
      })

      if (user.value && !axiosError) {
        user.value.is_verified = true
        toast.success('Successful verification.')
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
    }
  },
  {
    persist: {}
  }
)
