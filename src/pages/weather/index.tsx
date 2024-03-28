import { useQuery } from "react-query"
import CurrentWeather from "../../components/shared/current-weather"
import NextDays from "../../components/shared/next-days"
import Header from "./header"
import { getCurrentWeather } from "../../services/weather-services"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useWeatherStore } from "../../store/current-weather-store"
import WeatherChartWrapper from "../../components/shared/weather-chart-wrapper"
import ErrorBoundary from "../../error-boundry"
import { autoAlertMessage } from "../../utils/auto-alert-message"
import WeatherDetail from "../../components/shared/weather-detail"

const Weather = () => {
  const [searchParams] = useSearchParams()
  const { setCurrentWeather } = useWeatherStore()

  //retrieves lat and lon values
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")

  //brings up to date weather data
  const { data, refetch } = useQuery("current-weather", () =>
    getCurrentWeather(lat, lon)
  )

  //If you have data, it sends it to the CurrentWeather stat and if the data is not available, certain values are sent to the auto alert function
  useEffect(() => {
    if (data) {
      setCurrentWeather(data)
      autoAlertMessage({
        path: data?.weather[0]?.main,
        sunrise: data?.sys?.sunrise,
        sunset: data?.sys?.sunset,
      })
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [lat, lon])

  return (
    <>
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

        <div className="sm:col-span-6 col-span-12 ">
          <ErrorBoundary>
            <WeatherChartWrapper />
          </ErrorBoundary>
        </div>
      </section>
    </>
  )
}

export default Weather
