import type { LocationQuery } from 'vue-router'
import fetchData from '../utils/fetchData'

export function useVerifyEmail(params: LocationQuery) {
  async function validateEmail() {
    const response = await fetchData({
      method: 'GET',
      url: `${params.url}&signature=${params.signature}`
    })

    return !!!response.axiosError
  }

  return { validateEmail }
}
