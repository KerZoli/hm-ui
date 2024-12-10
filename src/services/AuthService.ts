import type { ILoginForm } from '@/types/form/ILoginForm';
import type { IUser } from '@/types/IUser';
import fetchData from '@/utils/fetchData';

const AuthService = {
  async login(formData: ILoginForm) {
    return fetchData<ILoginForm, IUser>({
      method: 'POST',
      url: '/login',
      data: formData
    });
  },

  async logout() {
    return fetchData({
      method: 'POST',
      url: '/logout'
    });
  },

  async initCsrfProtection() {
    return fetchData(
      {
        url: '/sanctum/csrf-cookie'
      },
      false
    );
  },

  async validateEmail(url: string) {
    return await fetchData({
      method: 'GET',
      url
    });
  }
};

export default AuthService;
