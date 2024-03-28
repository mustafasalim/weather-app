import axios from "axios"

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

  const response = await baseUrl({
    method,
    url,
    params,
    data,
  })

  return response
}
