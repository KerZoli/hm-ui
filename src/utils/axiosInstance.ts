import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import { toast } from 'vue3-toastify';
import AuthService from '@/services/AuthService';

export default function getAxiosInstance(appendApiUrl = true) {
  let baseURL = import.meta.env.VITE_API_BASE_URL;
  if (appendApiUrl) {
    baseURL += '/' + import.meta.env.VITE_API_VERSION;
  }

  const { resetStore } = useAuthStore();
  const axiosInstance = axios.create({
    baseURL: baseURL,
    withXSRFToken: true,
    withCredentials: true
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 419) {
        try {
          await AuthService.initCsrfProtection();
          return Promise.resolve();
        } catch (error) {
          return Promise.reject(error);
        }
      }

      if (error.response.status === 401) {
        resetStore();
        toast.error('Session expired. Please login.');

        return Promise.reject(error);
      }

      toast.error(error.response?.data?.message ?? 'Something went wrong. Please try again.');

      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
