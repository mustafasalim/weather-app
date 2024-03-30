import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import WeatherChart from "./weather-chart"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"
import { getCallFiveDaysForecast } from "../../../services/weather-services"

const WeatherChartWrapper = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [searchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")

  const { data, refetch } = useQuery("call-forecast", () =>
    getCallFiveDaysForecast(lat, lon)
  )

  const temperature =
    data && data.list.slice(0, 7).map((res: any) => Math.floor(res?.main?.temp))
  const windSpeed =
    data &&
    data.list.slice(0, 7).map((res: any) => Math.floor(res?.wind?.speed))
  const humidity =
    data &&
    data.list.slice(0, 7).map((res: any) => Math.floor(res?.main?.humidity))

  useEffect(() => {
    refetch()
  }, [lat, lon])

  const tabClass = (index: number) =>
    `py-2 px-4 border-b-2 flex items-center text-ellipsis justify-center ${
      selectedIndex === index
        ? "border-blue-500 outline-none"
        : "border-transparent"
    }`

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <Tabs
        defaultFocus={true}
        disableUpDownKeys
        selectedIndex={selectedIndex}
        scrolling="enabled"
        onSelect={handleSelect}
        className="w-full h-full p-2 bg-base-gray-800 rounded-lg overflow-hidden"
      >
        <TabList className="flex gap-x-2 border-base-gray-600 lg:text-heading-sm text-heading-xs text-base-gray-200 cursor-pointer">
          <Tab className={tabClass(0)}>
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
    </div>
  )
}

export default WeatherChartWrapper
