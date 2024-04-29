import fetchData from '../utils/fetchData'

export function useVerifyEmail(url: string) {
  async function validateEmail() {
    const response = await fetchData({
      method: 'GET',
      url: url
    })

    return !!response.axiosError
  }

  return { validateEmail }
}
