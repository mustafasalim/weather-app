export const getBackgroundImageUrl = (weatherCondition: any) => {
  const { path, sunrise, sunset } = weatherCondition
  const currentTime = new Date().getTime() / 1000
  const isDaytime = currentTime > sunrise && currentTime < sunset
  let icon

  if (isDaytime) {
    switch (path) {
      case "Clear":
        icon = "./images/bg-images/clear-day.png"
        break
      case "Clouds":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Rain":
        icon = "./images/bg-images/rain-day.png"
        break
      case "thunderstorm":
        icon = "./images/bg-images/storm-day.png"
        break
      case "Fog":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Mist":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Snow":
        icon = "./images/bg-images/cloudy-day.png"
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
        icon = "./images/bg-images/clear-night.png"
        break
      case "Clouds":
        icon = "./images/bg-images/few-clouds-night.png"
        break
      case "Rain":
        icon = "./images/bg-images/rain-night"
        break
      case "thunderstorm":
        icon = "./images/bg-images/storm-night.png"
        break
      case "Fog":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Mist":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Snow":
        icon = "./images/bg-images/cloudy-night.png"
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
