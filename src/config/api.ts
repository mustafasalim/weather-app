import axios from "axios"

import toast from "react-hot-toast"

//BASE_URL AND API_KEY
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

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

let errorToastShown = false

baseUrl.interceptors.response.use(
  function (response) {
    return response
  },

  function (error) {
    if (error) {
      if (!errorToastShown) {
        errorToastShown = true
        toast.error(
          "No region with coordinates found. You have been redirected to the main page "
        )
      }
      setTimeout(() => {
        errorToastShown = false
        window.location.href = "/"
      }, 3000)
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
