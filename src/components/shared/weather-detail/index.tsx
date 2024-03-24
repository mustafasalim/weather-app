import WeatherDetailItem from "./weather-detail-item"
import {
  ThermometerSimple,
  CloudRain,
  Drop,
  Wind,
  Sun,
} from "@phosphor-icons/react"

const WeatherDetail = () => {
  return (
    <section className="w-[22.438rem] h-[18.25rem] bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="w-[20.438rem] h-[17.75rem] overflow-hidden">
        <WeatherDetailItem
          icon={
            <ThermometerSimple
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Thermal sensation"
          value="26ºc"
        />
        <WeatherDetailItem
          icon={
            <CloudRain
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Probability of rain"
          value="0%"
        />
        <WeatherDetailItem
          icon={
            <Wind
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Wind speed"
          value="8 km/h"
        />
        <WeatherDetailItem
          icon={
            <Drop
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Air humidity"
          value="40%"
        />
        <WeatherDetailItem
          icon={
            <Sun
              className="text-base-gray-500"
              size={32}
            />
          }
          title="UV Index"
          value="5"
        />
      </div>
    </section>
  )
}

export default WeatherDetail
