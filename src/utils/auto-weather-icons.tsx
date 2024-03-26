import ClearDay from "../icons/clear-day"
import ClearNight from "../icons/clear-night"
import CloudyDay from "../icons/cloudy-day"
import CloudyNight from "../icons/cloudy-night"
import FewCloudsDay from "../icons/few-clouds-day"
import FewCloudsNight from "../icons/few-clouds-night"
import RainDay from "../icons/rain-day"
import RainNight from "../icons/rain-night"
import Snow from "../icons/snow"
import StormDay from "../icons/storm-day"
import StormNight from "../icons/storm-night"

interface AutoIconOptions {
  path: any
  sunrise?: any
  sunset?: any
}

const AutoIcon = (weatherCondition: AutoIconOptions) => {
  const { path, sunrise, sunset } = weatherCondition
  const currentTime = new Date().getTime() / 1000
  const isDaytime = currentTime > sunrise && currentTime < sunset
  let icon

  console.log(sunrise, sunset)

  if (isDaytime || sunrise === undefined || sunset === undefined) {
    switch (path) {
      case "Clear":
        icon = <ClearDay />
        break
      case "Clouds":
        icon = <FewCloudsDay />
        break
      case "Mist":
        icon = <CloudyDay />
        break
      case "Drizzle":
        icon = <CloudyDay />
        break
      case "Rain":
        icon = <RainDay />
        break
      case "Thunderstorm":
        icon = <StormDay />
        break
      case "Snow":
        icon = <Snow />
        break
      case "Smoke":
        icon = <CloudyDay />
        break
      case "Haze":
        icon = <CloudyDay />
        break
      case "Fog":
        icon = <CloudyDay />
        break
      case "Squall":
        icon = <StormDay />
        break
      default:
        icon = <FewCloudsNight />
        break
    }
  } else {
    switch (path) {
      case "Clear":
        icon = <ClearNight />
        break
      case "Clouds":
        icon = <FewCloudsNight />
        break
      case "Mist":
        icon = <CloudyNight />
        break
      case "Drizzle":
        icon = <CloudyNight />
        break
      case "Rain":
        icon = <RainNight />
        break
      case "Thunderstorm":
        icon = <StormNight />
        break
      case "Snow":
        icon = <Snow />
        break
      case "Smoke":
        icon = <CloudyNight />
        break
      case "Haze":
        icon = <CloudyNight />
        break
      case "Fog":
        icon = <CloudyNight />
        break
      case "Squall":
        icon = <StormNight />
        break
      default:
        icon = <FewCloudsNight />
        break
    }
  }

  return icon
}

export default AutoIcon
