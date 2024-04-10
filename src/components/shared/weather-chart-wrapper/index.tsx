import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import WeatherChart from "./weather-chart"
import { motion } from "framer-motion"
import { useForecastStore } from "../../../store/forecast-store"
import { useState } from "react"

const WeatherChartWrapper = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const forecast = useForecastStore((state: any) => state.forecast)
  const inValidForecast = forecast && forecast.list

  const temperature =
    inValidForecast &&
    forecast.list.slice(0, 7).map((res: any) => Math.floor(res?.main?.temp))
  const windSpeed =
    inValidForecast &&
    forecast.list.slice(0, 7).map((res: any) => Math.floor(res?.wind?.speed))
  const humidity =
    inValidForecast &&
    forecast.list.slice(0, 7).map((res: any) => Math.floor(res?.main?.humidity))

  const tabClass = (index: number) =>
    `py-2 px-4 border-b-2 flex items-center text-ellipsis justify-center ${
      selectedIndex === index
        ? "border-blue-500 outline-none"
        : "border-transparent"
    }`

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    console.log("clikc")
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          className="w-full min-h-[300px] p-2 bg-base-gray-800 rounded-lg overflow-hidden"
        >
          <TabList className="flex gap-x-2 border-base-gray-600 lg:text-heading-sm text-heading-xs text-base-gray-200 cursor-pointer">
            <Tab
              className={tabClass(0)}
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <span>Thermal sensation</span>
            </Tab>
            <Tab className={tabClass(1)}>
              <span>Wind speed</span>
            </Tab>
            <Tab className={tabClass(2)}>
              <span>Air humidity</span>
            </Tab>
          </TabList>

          <TabPanel>
            <WeatherChart
              value="ºc"
              colors="#FFD97A"
              label="Temperature"
              data={temperature}
            />
          </TabPanel>
          <TabPanel>
            <WeatherChart
              value="km/h"
              colors="#8FB2F5"
              label="Wind Speed"
              data={windSpeed}
            />
          </TabPanel>
          <TabPanel>
            <WeatherChart
              value="%"
              colors="#ABABC4"
              label="Air humidity"
              data={humidity}
            />
          </TabPanel>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default WeatherChartWrapper
