import { api } from "../../config/api"

//current weather api
export const getCurrentWeather = async (lat: any, lon: any) => {
  const response = await api({
    method: "get",
    url: "/data/2.5/weather",
    params: {
      lat,
      lon,
      units: "metric",
    },
  })
  return response.data
}

export const getGuessingWeather = async (city: any) => {
  const response = await api({
    method: "get",
    url: "/data/2.5/weather",
    params: {
      q: city,
      units: "metric",
    },
  })
  return response.data
}

//5-day and 5-hour api
export const getForecast = async (lat: any, lon: any) => {
  const response = await api({
    method: "get",
    url: "data/2.5/forecast",
    params: {
      lat,
      lon,
      units: "metric",
    },
  })
  return response.data
}

//geolocation api
export const getGeo = async (city: any) => {
  const response = await api({
    method: "get",
    url: "/geo/1.0/direct",
    params: {
      q: city,
      limit: 5,
    },
  })
  return response.data
}
