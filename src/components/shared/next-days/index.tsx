import { useQuery } from "react-query"
import Day from "./day"
import { getForecast } from "../../../services/weather-services"
import { useSearchParams } from "react-router-dom"
import { getDaysOfWeek } from "../../../utils/get-day-of-week"
import AutoIcon from "../../../utils/auto-weather-icons"
import { useEffect, useState } from "react"
import { processForecastData } from "../../../utils/process-forecast-data"

const NextDays = () => {
  const [searchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")
  const { data, refetch } = useQuery(
    "call-five-forecast",
    async () => await getForecast(lat, lon)
  )
  useEffect(() => {
    refetch()
  }, [lat, lon])

  //5-day forecast data
  const [list, setList] = useState<any>([])
  useEffect(() => {
    if (data) {
      const processedData = processForecastData(data.list)
      setList(processedData)
    }
  }, [data])

  return (
    <section className="w-full lg:h-52 h-[11rem] bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="lg:w-full lg:h-full flex items-center  overflow-x-auto">
        {data &&
          list.slice(1.6).map((item: any, idx: any) => (
            <Day
              key={idx}
              day={getDaysOfWeek()[idx]}
              icon={<AutoIcon path={item.dailyData[0].weather[0].main} />}
              tempMax={Math.floor(item.avgTemp)}
              temp_Min={Math.floor(item.avgTemp)}
            />
          ))}
      </div>
    </section>
  )
}

export default NextDays
