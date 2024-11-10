import axios from 'axios'
import { baseURL } from '~/constants'

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api`,

  headers: {
    'Content-Type': 'application/json',
  },
})
export default axiosInstance
