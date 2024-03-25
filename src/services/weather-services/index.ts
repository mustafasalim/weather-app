import { api } from "../../config/api"

export const getWeatherData = async (param: any) => {
  const { city } = param
  return await api({
    method: "get",
    url: "/weather",
    city: city,
  })
}
