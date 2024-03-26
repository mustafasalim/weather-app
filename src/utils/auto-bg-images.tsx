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
        icon = "./images/bg-images/few-clouds-day.png"
        break
      case "Mist":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Drizzle":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Rain":
        icon = "./images/bg-images/rain-day.png"
        break
      case "Thunderstorm":
        icon = "./images/bg-images/storm-day.png"
        break
      case "Snow":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Smoke":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Haze":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Fog":
        icon = "./images/bg-images/cloudy-day.png"
        break
      case "Squall":
        icon = "./images/bg-images/storm-day.png"
        break
      default:
        icon = "./images/bg-images/few-clouds-day.png"
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
      case "Mist":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Drizzle":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Rain":
        icon = "./images/bg-images/rain-night.png"
        break
      case "Thunderstorm":
        icon = "./images/bg-images/storm-night.png"
        break
      case "Snow":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Smoke":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Haze":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Fog":
        icon = "./images/bg-images/cloudy-night.png"
        break
      case "Squall":
        icon = "./images/bg-images/storm-night.png"
        break
      default:
        icon = "./images/bg-images/few-clouds-night.png"
        break
    }
  }

  return icon
}
