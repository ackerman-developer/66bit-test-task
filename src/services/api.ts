import axios, {AxiosInstance} from 'axios'

const BACKEND_URL = 'https://frontappapi.dock7.66bit.ru/api'
const REQUEST_TIMEOUT = 5000

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  })

  return api
}
