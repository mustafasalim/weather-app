interface WeatherData {
  dt: number
  main: {
    temp: number
  }
  weather: {
    main: string
  }[]
}

interface ProcessedForecast {
  date: string
  avgTemp: number
  dailyData: WeatherData[]
}

export const processForecastData = (
  data: WeatherData[]
): ProcessedForecast[] => {
  const dailyForecasts: { [date: string]: WeatherData[] } = {}

  // Veriyi tarih bazında gruplayın ve her gün için ortalama sıcaklığı alın
  data.forEach((forecast) => {
    const date = new Date(forecast.dt * 1000).toISOString().split("T")[0]
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = []
    }
    dailyForecasts[date].push(forecast)
  })

  // Ortalama sıcaklıkları hesaplayın ve 5 günlük tahminlere dönüştürün
  const processedData: ProcessedForecast[] = Object.keys(dailyForecasts).map(
    (date) => {
      const dailyData = dailyForecasts[date]
      const avgTemp =
        dailyData.reduce((sum, forecast) => sum + forecast.main.temp, 0) /
        dailyData.length
      return {
        date,
        avgTemp,
        dailyData: dailyData.slice(0, 8), // İlk 8 tahmini alarak 5 günlük tahminler oluşturun
      }
    }
  )

  return processedData
}
