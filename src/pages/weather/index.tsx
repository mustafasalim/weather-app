import CurrentWeather from "../../components/shared/current-weather"
import NextDays from "../../components/shared/next-days"
import WeatherDetail from "../../components/shared/weather-detail"

const Weather = () => {
  return (
    <section className="w-full h-screen bg-base-gray-900 flex flex-col items-center justify-evenly">
      <CurrentWeather />
      <WeatherDetail />
      <NextDays />
    </section>
  )
}

export default Weather
