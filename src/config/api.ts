import axios from "axios"

const BASE_URL = "https://api.openweathermap.org/data/2.5"
const API_KEY = "a1ea7eb8da313ba21e69591392e42c83"

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
  city?: string
}

export const api = async (param: apiOptions) => {
  const { method, url, city } = param

  try {
    const response = await baseUrl({
      method,
      url,
      params: {
        q: city,
      },
    })

    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}
