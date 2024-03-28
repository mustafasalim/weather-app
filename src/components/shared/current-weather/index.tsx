import { useState, useEffect } from "react"
import AutoIcon from "../../../utils/auto-weather-icons"
import { useWeatherStore } from "../../../store/current-weather-store"
import { formatDate } from "../../../utils/format-date"
import { getBackgroundImageUrl } from "../../../utils/auto-bg-images"

const CurrentWeather = () => {
  const [backgroundUrl, setBackgroundUrl] = useState<any>("")
  const data = useWeatherStore((state) => state.currentWeather)
  const date = formatDate()

  useEffect(() => {
    if (data.weather && data.weather.length > 0) {
      setBackgroundUrl(
        getBackgroundImageUrl({
          path: data?.weather[0]?.main,
          sunrise: data?.sys?.sunrise,
          sunset: data?.sys?.sunset,
        })
      )
    }
  }, [data])

  return (
    <section className="w-full p-3 h-full bg-base-gray-800 rounded-xl">
      {data.weather && data.weather.length > 0 && (
        <div
          className="w-full h-full lg:bg-center flex flex-col items-center justify-between rounded-xl"
          style={{
            backgroundImage: `url('${backgroundUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {data && (
            <div className="w-full flex flex-col p-6">
              <div className="lg:text-heading-xl text-heading-sm text-base-gray-100">
                {data?.name}, {data?.sys?.country}
              </div>
              <div className="lg:text-lg text-xs text-base-gray-100">
                {date}
              </div>
            </div>
          )}
          {data && (
            <div className="w-full flex items-center justify-between">
              <div className="pl-6">
                <div className="flex flex-col justify-center gap-y-2">
                  <div className="lg:text-heading-hg text-heading-xl text-base-white">
                    {Math.floor(data?.main?.temp)}ºc
                  </div>
                  <div>
                    <div className="lg:text-heading-md text-heading-sm text-base-white">
                      {Math.floor(data?.main?.temp_min)}ºc /{" "}
                      {Math.floor(data?.main?.temp_max)}ºc
                    </div>
                    <div className="lg:text-heading-md text-sm text-base-white">
                      {data.weather &&
                        data.weather.length > 0 &&
                        data.weather[0].description}
                    </div>
                  </div>
                </div>
              </div>
              {data.weather && data.weather.length > 0 && (
                <div className="w-[20rem] flex items-center justify-start">
                  <AutoIcon
                    sunrise={data?.sys?.sunrise}
                    sunset={data?.sys?.sunset}
                    path={data?.weather[0].main}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default CurrentWeather
