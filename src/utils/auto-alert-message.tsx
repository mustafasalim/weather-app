import toast from "react-hot-toast"

export const autoAlertMessage = (props: any) => {
  const { path, sunrise, sunset } = props
  const currentTime = new Date().getTime() / 1000
  const isDaytime = currentTime > sunrise && currentTime < sunset
  let icon
  if (isDaytime) {
    switch (path) {
      case "Clear":
        icon = toast("It's sunny today! You'll have a great day.", {
          icon: "😊",
        })
        break
      case "Clouds":
        icon = toast(
          "It's a cloudy day! Don't forget to take your umbrella outside.",
          {
            icon: "☂️",
          }
        )
        break
      case "Mist":
        icon = toast(
          "There is foggy weather. Be careful and drive extra cautiously in traffic",
          {
            icon: "🚦",
          }
        )
        break
      case "Drizzle":
        icon = toast(
          "Light rains are expected. Don't forget to take your umbrella.",
          {
            icon: "☂️",
          }
        )
        break
      case "Rain":
        icon = toast(
          "It's rainy today! Don't forget to wear a raincoat when you go out.",
          {
            icon: "🧥",
          }
        )
        break
      case "Thunderstorm":
        icon = toast("It's a stormy night! Stay safe and try not to go out.", {
          icon: "⚠️",
        })
        break
      case "Snow":
        icon = toast(
          "It's snowing! It's a great day to enjoy the snow outside.",
          {
            icon: "😊",
          }
        )
        break
      case "Smoke":
        icon = toast(
          "Smoke! Remember to wear a mask if you have to stay outside.",
          {
            icon: "😷",
          }
        )
        break
      case "Haze":
        icon = toast(
          "There is a light haze. Remember to breathe when spending time outdoors.",
          {
            icon: "😮‍💨",
          }
        )
        break
      case "Fog":
        icon = toast(
          "Heavy fog! Drive more slowly and carefully when driving in foggy weather.",
          {
            icon: "⚠️",
          }
        )
        break
      case "Squall":
        icon = toast(
          "There's a violent storm! Stay safe and try not to go out.",
          {
            icon: "⚠️",
          }
        )
        break
      default:
        icon = toast(
          "Weather information could not be received. Please try again later.",
          {
            icon: "👏",
          }
        )
        break
    }
  } else {
    switch (path) {
      case "Clear":
        icon = toast("The night is clear! It's a great night for stargazing.", {
          icon: "😊",
        })
        break
      case "Clouds":
        icon = toast(
          "It's cloudy at night. It may be difficult to see the stars.",
          {
            icon: "☁️",
          }
        )
        break
      case "Mist":
        icon = toast(
          "There is foggy weather at night. Be careful and do not stay outside too long.",
          {
            icon: "🚦",
          }
        )
        break
      case "Drizzle":
        icon = toast(
          "Light rains are expected. Remember to take your umbrella at night.",
          {
            icon: "☂️",
          }
        )
        break
      case "Rain":
        icon = toast(
          "The night is rainy! Don't forget to wear a raincoat when you go out.",
          {
            icon: "🧥",
          }
        )
        break
      case "Thunderstorm":
        icon = toast("It's a stormy night! Stay safe and try not to go out.", {
          icon: "⚠️",
        })
        break
      case "Snow":
        icon = toast(
          "It's snowing! It's a great time to enjoy the snow outside at night.",
          {
            icon: "😊",
          }
        )
        break
      case "Smoke":
        icon = toast(
          "Duman var! Dışarıda kalmanız gerekiyorsa maske takmayı unutmayın.",
          {
            icon: "😷",
          }
        )
        break
      case "Haze":
        icon = toast(
          "There is a light haze. Remember to breathe when spending time outside at night.",
          {
            icon: "😮‍💨",
          }
        )
        break
      case "Fog":
        icon = toast(
          "Heavy fog! Be slower and more careful when driving at night.",
          {
            icon: "⚠️",
          }
        )
        break
      case "Squall":
        icon = toast(
          "There's a violent storm! Stay safe and try not to go out.",
          {
            icon: "⚠️",
          }
        )
        break
      default:
        toast(
          "Weather information could not be received. Please try again later.",
          { icon: "👏" }
        )
        break
    }
  }

  return icon
}
