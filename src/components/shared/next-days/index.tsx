import Day from "./day"
import { getDaysOfWeek } from "../../../utils/get-day-of-week"
import AutoIcon from "../../../utils/auto-weather-icons"
import { useEffect, useState } from "react"
import { processForecastData } from "../../../utils/process-forecast-data"
import { useForecastStore } from "../../../store/forecast-store"

const NextDays = () => {
  const forecast = useForecastStore((state: any) => state.forecast)

  //5-day forecast data
  const [list, setList] = useState<any>([])
  useEffect(() => {
    if (forecast && forecast.list) {
      const processedData = processForecastData(forecast?.list)
      setList(processedData)
    }
  }, [forecast])

  console.log("list", list)

  return (
    <section className="w-full lg:h-52 h-[11rem] bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="lg:w-full lg:h-full flex items-center  overflow-x-auto">
        {list &&
          list?.slice(1.6).map((item: any, idx: any) => (
            <Day
              key={idx}
              day={getDaysOfWeek()[idx]}
              icon={<AutoIcon path={item?.dailyData[0]?.weather[0]?.main} />}
              tempMax={Math.floor(item?.avgTemp)}
              temp_Min={Math.floor(item?.avgTemp)}
            />
          ))}
      </div>
    </section>
  )
}

export default NextDays
