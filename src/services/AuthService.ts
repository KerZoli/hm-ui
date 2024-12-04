import type { IUser } from "@/types/IUser";
import type { IUserLoginData } from "@/types/IUserLoginData";
import fetchData from "@/utils/fetchData"

const AuthService = {
  async login(userloginData: IUserLoginData) {
    return fetchData<IUserLoginData, IUser>({
      method: 'POST',
      url: 'login',
      data: userloginData
    })
  },

  async logout() {
    return fetchData({
      method: 'POST',
      url: 'logout'
    });
  },

  async initCsrfProtection() {
    return fetchData(
      {
        url: '/sanctum/csrf-cookie'
      },
      false
    )
  },

  async validateEmail(url: string) {
    return await fetchData({
      method: 'GET',
      url
    })
  }
}

export default AuthService;