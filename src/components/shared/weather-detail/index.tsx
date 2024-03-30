import { useSearchParams } from "react-router-dom"
import WeatherDetailItem from "./weather-detail-item"
import {
  ThermometerSimple,
  CloudRain,
  Drop,
  Wind,
  Sun,
} from "@phosphor-icons/react"
import { useQuery } from "react-query"
import { useEffect } from "react"
import { getForecast } from "../../../services/weather-services"

const WeatherDetail = () => {
  const [searchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")
  const { data, refetch } = useQuery("one-call", () => getForecast(lat, lon))

  const list = data && data.list.slice(0, 1).map((item: any) => item && item)

  useEffect(() => {
    refetch()
  }, [lat, lon])

  return (
    <section className=" w-full sm:h-full  h-[19.25rem] p-2 bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="lg:h-full lg:flex lg:flex-col lg:items-start lg:w-full lg:gap-x-8 lg:p-1 w-[20.438rem] h-[17.75rem]">
        <WeatherDetailItem
          icon={
            <ThermometerSimple
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Thermal sensation"
          value={Math.floor(list && list[0]?.main?.feels_like) + "ºc"}
        />
        <WeatherDetailItem
          icon={
            <CloudRain
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Probability of rain"
          value={Math.floor(list && list[0]?.pop) + "%"}
        />
        <WeatherDetailItem
          icon={
            <Wind
              className="text-base-gray-500"
              size={32}
            />
          }
          title="Wind speed"
          value={Math.floor(list && list[0]?.wind?.speed) + "km/h"}
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
