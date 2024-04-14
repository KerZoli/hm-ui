import { ref } from "vue";
import { defineStore } from "pinia";
import { useHttp } from "@/utils/http";
import type { UserLoginData } from "@/types/UserLoginData";

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);


  function initCsrfProtection() {
    const execute = useHttp()

    return execute('/sanctum/csrf-cookie')
  }  

  function sendLogin(userloginData: UserLoginData) {
    const execute = useHttp()

    return execute('api/v1/login', {
      method: "POST",
      data: userloginData
    })
  }

  async function login(userloginData: UserLoginData) {
    await initCsrfProtection()
    const { data } = await sendLogin(userloginData)
    console.log(data.value)
  }

  return { login }
})