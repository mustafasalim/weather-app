import { useQuery } from "react-query"
import CurrentWeather from "../../components/shared/current-weather"
import NextDays from "../../components/shared/next-days"
import WeatherDetail from "../../components/shared/weather-detail"
import Header from "./header"
import { getCall, getCurrentWeather } from "../../services/weather-services"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useWeatherStore } from "../../store/current-weather-store"

0
const Weather = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { setCurrentWeather } = useWeatherStore()
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")

  const { data, refetch } = useQuery("current-weather", () =>
    getCurrentWeather(lat, lon)
  )
  useEffect(() => {
    if (data) {
      setCurrentWeather(data)
    }
  }, [data])

  useEffect(() => {
    if (!lat && !lon) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [lat, lon])

  return (
    <section className="w-full h-screen overflow-y-auto bg-base-gray-900 p-2 flex flex-col gap-y-2">
      <Header />

      <div className=" grid grid-cols-12 gap-2">
        <div className="col-span-12 sm:col-span-6">
          <CurrentWeather />
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12">
              <WeatherDetail />
            </div>
            <div className="col-span-12">
              <NextDays />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather
