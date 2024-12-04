import getAxiosInstance from '@/utils/axiosInstance'
import type { AxiosError, AxiosRequestConfig } from 'axios'

export interface Response<T> {
  data: T | null
  axiosError: AxiosError | null
}

export default async function fetchData<T = any, U = any>(
  options: AxiosRequestConfig<T>,
  appendApiUrl = true
): Promise<Response<U>> {
  try {
    const axiosInstance = getAxiosInstance(appendApiUrl)
    const response = await axiosInstance(options)
    return {
      data: response.data,
      axiosError: null
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      data: null,
      axiosError: axiosError
    }
  }
}
