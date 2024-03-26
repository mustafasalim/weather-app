import { api } from "../../config/api"

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

export const getCallFiveDaysForecast = async (lat: any, lon: any) => {
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
