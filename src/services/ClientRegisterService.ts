import type { IRegisterForm } from '@/types/form/IRegisterForm';
import type { IUser } from '@/types/IUser';
import fetchData from '@/utils/fetchData';
import toFormData from '@/utils/helperMethods';

const ClientRegisterService = {
  async register(data: IRegisterForm) {
    const formData = toFormData(data);
    return fetchData<FormData, IUser>({
      method: 'POST',
      url: 'register',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export default ClientRegisterService;
