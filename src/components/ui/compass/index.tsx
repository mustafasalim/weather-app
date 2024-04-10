import { Wind } from "@phosphor-icons/react"
import { useWeatherStore } from "../../../store/current-weather-store"

const Compass = () => {
  const data = useWeatherStore((state: any) => state.currentWeather)
  const windSpeed = data?.wind?.speed
  const windDeg = data?.wind?.deg
  console.log("compass-forecast", data)

  return (
    <div className="flex flex-col w-full h-full bg-base-gray-800 rounded-xl items-center justify-center gap-4">
      <div>
        <div className="flex gap-x-2 items-center ">
          <Wind
            className="text-base-white"
            size={30}
          />
          <span className="lg:text-heading-md text-heading-xs text-base-white">
            Wind
          </span>
        </div>
        <div className="compass relative flex items-center justify-center">
          <div className="image relative">
            <img
              src="./images/compass/compass_body.svg"
              width={110}
              height={110}
            />
            <img
              src="./images/compass/compass_arrow.svg"
              className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert"
              style={{
                transform: `rotate(${windDeg}deg) translateX(-50%)`,
                height: "100%",
              }}
              width={11}
              height={11}
            />
          </div>
          <p
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium"
          >
            {Math.round(windSpeed)} m/s
          </p>
        </div>
      </div>
    </div>
  )
}

export default Compass
