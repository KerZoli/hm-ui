import axios from 'axios'
import { notificationError } from './notifications'

export default function getAxiosInstance(appendApiUrl = true) {
  let baseURL = import.meta.env.VITE_API_BASE_URL
  if (appendApiUrl) {
    baseURL += import.meta.env.VITE_API_VERSION
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    withXSRFToken: true,
    withCredentials: true
  })

  axiosInstance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      notificationError(error.response?.data?.message ?? 'Something went wrong. Please try again.')

      return Promise.reject(error)
    }
  )

  return axiosInstance
}
