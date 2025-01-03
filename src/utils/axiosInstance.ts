import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import { toast } from 'vue3-toastify';
import router from '@/router';

export default function getAxiosInstance(appendApiUrl = true) {
  let baseURL = import.meta.env.VITE_API_BASE_URL;
  if (appendApiUrl) {
    baseURL += '/' + import.meta.env.VITE_API_VERSION;
  }

  const { resetStore, user } = useAuthStore();
  const axiosInstance = axios.create({
    baseURL: baseURL,
    withXSRFToken: true,
    withCredentials: true
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if ([401, 419].includes(error.response.status) && user) {
        resetStore();
        toast.error('Session expired. Please login.');
        router.push({ name: 'login' });

        return Promise.reject(error);
      }

      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');

      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
