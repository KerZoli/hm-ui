import axios from 'axios'
import { notificationError } from './notifications'
import { useAuthStore } from '@/stores/auth'

export default function getAxiosInstance(appendApiUrl = true) {
  let baseURL = import.meta.env.VITE_API_BASE_URL
  if (appendApiUrl) {
    baseURL += import.meta.env.VITE_API_VERSION
  }

  const { resetStore } = useAuthStore()

  const axiosInstance = axios.create({
    baseURL: baseURL,
    withXSRFToken: true,
    withCredentials: true
  })

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 419) {
        resetStore()
        notificationError('Session expired.')

        return Promise.reject(error)
      }

      notificationError(error.response?.data?.message ?? 'Something went wrong. Please try again.')

      return Promise.reject(error)
    }
  )

  return axiosInstance
}
