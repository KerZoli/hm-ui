import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUserLoginData } from '@/interfaces/IUserLoginData'
import type { IUser } from '@/interfaces/IUser'
import fetchData from '@/utils/fetchData'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<IUser | null>(null)
    const error = ref<string | undefined>()
    const loading = ref(false)

    const isAuthenticated = computed(() => !!user.value)

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
        url: 'login',
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
      const { axiosError } = await fetchData({
        method: 'POST',
        url: 'logout'
      })
      error.value = axiosError?.message
      if (!error.value) {
        resetStore()
      }
    }

    return { login, logout, resetStore, user, isAuthenticated, error, loading }
  },
  {
    persist: {}
  }
)
