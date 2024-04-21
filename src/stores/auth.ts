import { ref } from 'vue'
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
    }

    return { login, logout, user, error, loading }
  },
  {
    persist: {}
  }
)
