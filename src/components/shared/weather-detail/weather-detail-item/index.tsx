interface WeatherDetailItemProps {
  icon: any
  title: string
  value: string | number
}

const WeatherDetailItem = (props: WeatherDetailItemProps) => {
  const { icon, title, value } = props
  return (
    <div className="flex items-center justify-between py-4 border-b border-base-gray-700">
      <div className="h-[1.5rem] flex items-center justify-between gap-x-2 ">
        {icon}

        <span className="text-heading-xs text-base-gray-200">{title}</span>
      </div>
      <div className="text-heading-sm  text-base-gray-100">{value}</div>
    </div>
  )
}

export default WeatherDetailItem
