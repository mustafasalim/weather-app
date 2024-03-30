import axios from "axios"
import toast from "react-hot-toast"

//BASE_URL AND API_KEY
const BASE_URL = "https://api.openweathermap.org"
const API_KEY = "da043207154dbe698034acd833f5c026"

//create base url with axios create
const baseUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: API_KEY,
  },
})

// Add a response interceptor
baseUrl.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error) {
      setTimeout(() => {
        window.location.href = "/"
      }, 1500)

      toast.error(
        "No region with coordinates found. You have been redirected to the main page"
      )[error]
    }
    return Promise.reject(error)
  }
)

//apiOptions interface
interface apiOptions {
  method: string
  url: string
  params?: any
  data?: any
}

//general api
export const api = async (param: apiOptions) => {
  const { method, url, params, data } = param

  try {
    const response = await baseUrl({
      method,
      url,
      params,
      data,
    })

    return response
  } catch (error) {
    return Promise.reject(error)
  }
}
