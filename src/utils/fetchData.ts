import getAxiosInstance from '@/utils/axiosInstance'
import type { AxiosError, AxiosRequestConfig } from 'axios'

interface Response<U> {
  data: U | null
  axiosError: AxiosError | null
}

export default async function fetchData<T = any, U = any>(
  options: AxiosRequestConfig<T>,
  appendApiUrl: boolean = true
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
