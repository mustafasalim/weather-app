import CurrentWeather from "../../components/shared/current-weather"
import NextDays from "../../components/shared/next-days"
import WeatherDetail from "../../components/shared/weather-detail"
import Header from "./header"
import { useQuery } from "react-query"
import { getWeatherData } from "../../services/weather-services"
0
const Weather = () => {
  const { data, isLoading, isError } = useQuery("current", () =>
    getWeatherData({ city: "london" })
  )
  console.log(data)

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
