import axios from "axios"

const BASE_URL = "https://api.openweathermap.org"
const API_KEY = "da043207154dbe698034acd833f5c026"

const baseUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: API_KEY,
  },
})

interface apiOptions {
  method: string
  url: string
  params?: any
  data?: any
}

export const api = async (param: apiOptions) => {
  const { method, url, params, data } = param

  const response = await baseUrl({
    method,
    url,
    params,
    data,
  })

  return response
}
