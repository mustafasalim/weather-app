import { create } from "zustand"

interface CurrentWeatherState {
  currentWeather: any
  setCurrentWeather: (by: any) => void
}

export const useWeatherStore = create<CurrentWeatherState>()((set) => ({
  currentWeather: [],
  setCurrentWeather: (by) => set((state) => ({ ...state, currentWeather: by })),
}))
