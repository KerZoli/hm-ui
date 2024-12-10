import type { IRegisterForm } from '@/types/form/IRegisterForm';
import type { IUser } from '@/types/IUser';
import fetchData from '@/utils/fetchData';

const ClientRegisterService = {
  async register(formData: IRegisterForm) {
    return fetchData<IRegisterForm, IUser>({
      method: 'POST',
      url: 'register',
      data: formData
    });
  }
};

export default ClientRegisterService;
