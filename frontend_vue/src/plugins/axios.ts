import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    // To improve : add authentication token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
