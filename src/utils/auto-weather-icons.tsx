import ClearDay from "../icons/clear-day"
import ClearNight from "../icons/clear-night"
import CloudyDay from "../icons/cloudy-day"
import CloudyNight from "../icons/cloudy-night"
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

  if (isDaytime || null) {
    switch (path) {
      case "Clear":
        icon = <ClearDay />
        break
      case "Clouds":
        icon = <CloudyDay />
        break
      case "Rain":
        icon = <RainDay />
        break
      case "thunderstorm":
        icon = <StormDay />
        break
      case "Fog":
        icon = <CloudyDay />
        break
      case "Mist":
        icon = <CloudyDay />
        break
      case "Snow":
        icon = <Snow />
        break

      default:
        icon = (
          <img
            src="default-icon.svg"
            alt="Default"
          />
        )
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
      case "Rain":
        icon = <RainNight />
        break
      case "thunderstorm":
        icon = <StormNight />
        break
      case "Fog":
        icon = <CloudyNight />
        break
      case "Mist":
        icon = <CloudyNight />
        break
      case "Snow":
        icon = <Snow />
        break

      default:
        icon = (
          <img
            src="default-icon.svg"
            alt="Default"
          />
        )
        break
    }
  }

  return icon
}

export default AutoIcon
