import { useQuery } from "react-query"
import Day from "./day"
import { getCallFiveDaysForecast } from "../../../services/weather-services"
import { useSearchParams } from "react-router-dom"
import { getDaysOfWeek } from "../../../utils/get-day-of-week"
import AutoIcon from "../../../utils/auto-weather-icons"
import { useEffect } from "react"

const NextDays = () => {
  const [searchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")
  const { data, refetch } = useQuery("call-five-forecast", () =>
    getCallFiveDaysForecast(lat, lon)
  )

  const list = data && data.list.slice(0, 5).map((res: any) => res)
  console.log(list)

  console.log(getDaysOfWeek())

  useEffect(() => {
    refetch()
  }, [lat, lon])

  return (
    <section className="w-full lg:h-52 h-[11rem] bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="lg:w-full lg:h-full w-[20.938rem] h-[9.5rem] flex items-center justify-center">
        {data &&
          list.map((item: any, idx: any) => (
            <Day
              key={idx}
              day={getDaysOfWeek()[idx]}
              icon={<AutoIcon path={item.weather[0].main} />}
              tempMax={Math.floor(item.main.temp_max)}
              temp_Min={Math.floor(item.main.temp_min)}
            />
          ))}
      </div>
    </section>
  )
}

export default NextDays
