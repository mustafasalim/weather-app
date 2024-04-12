import { useQuery } from "react-query"
import CurrentWeather from "../../components/shared/current-weather"
import NextDays from "../../components/shared/next-days"
import Header from "./header"
import { getCurrentWeather, getForecast } from "../../services/weather-services"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useWeatherStore } from "../../store/current-weather-store"
import WeatherChartWrapper from "../../components/shared/weather-chart-wrapper"
import ErrorBoundary from "../../error-boundry"
import { autoAlertMessage } from "../../utils/auto-alert-message"
import WeatherDetail from "../../components/shared/weather-detail"
import { motion } from "framer-motion"
import { useForecastStore } from "../../store/forecast-store"
import Loading from "../../components/ui/loading"
import Compass from "../../components/shared/compass"
const Weather = () => {
  const [searchParams] = useSearchParams()
  const { setCurrentWeather } = useWeatherStore()
  const { setForecast } = useForecastStore()
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")
  const {
    data: currentWeatherData,
    refetch: currentWeatherRefetch,
    isLoading: currentWeatherLoading,
  } = useQuery("current-weather", async () => await getCurrentWeather(lat, lon))
  const {
    data: forecastData,
    refetch: forecastRefetch,
    isLoading: forecastDataLoading,
  } = useQuery("forecast", async () => await getForecast(lat, lon))

  useEffect(() => {
    if (currentWeatherData) {
      setCurrentWeather(currentWeatherData)
      autoAlertMessage({
        path: currentWeatherData?.weather[0]?.main,
        sunrise: currentWeatherData?.sys?.sunrise,
        sunset: currentWeatherData?.sys?.sunset,
      })
    }
  }, [currentWeatherData])

  useEffect(() => {
    if (forecastData) {
      setForecast(forecastData)
    }
  }, [forecastData])

  useEffect(() => {
    if (lat && lon) {
      currentWeatherRefetch()
      forecastRefetch()
    }
  }, [lat, lon])

  if (currentWeatherLoading || forecastDataLoading) {
    return <Loading />
  }

  return (
    <>
      <motion.div>
        <section className="w-full h-screen overflow-auto bg-base-gray-900 p-2 flex flex-col gap-y-2">
          <Header />
          <div className="grid  grid-cols-12 gap-2">
            <div className="col-span-12 sm:col-span-8">
              <ErrorBoundary>
                <CurrentWeather />
              </ErrorBoundary>
            </div>
            <div className="col-span-12 sm:col-span-4 ">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <ErrorBoundary>
                    <WeatherDetail />
                  </ErrorBoundary>
                </div>
                <div className="col-span-12">
                  <ErrorBoundary>
                    <NextDays />
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="sm:col-span-10 col-span-12 ">
              <ErrorBoundary>
                <WeatherChartWrapper />
              </ErrorBoundary>
            </div>
            <div className="sm:col-span-2 col-span-12">
              <Compass
                compassSize={110}
                arrowSize={11}
              />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Weather
