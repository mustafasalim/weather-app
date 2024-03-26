interface DayProps {
  day: string
  icon: any
  tempMax: number
  temp_Min: number
}

const Day = (props: DayProps) => {
  const { day, icon, tempMax, temp_Min } = props
  return (
    <div className=" lg:w-full flex flex-col items-center justify-evenly gap-1 w-[4.188rem] h-full">
      <div className="lg:text-heading-md text-heading-xs text-base-gray-200">
        {day}
      </div>
      <div className="lg:text-heading-md text-heading-xs w-20 text-base-gray-200">
        {icon}
      </div>
      <div>
        <div className="lg:text-heading-md text-heading-xs text-base-gray-100">
          {tempMax} ºc
        </div>
        <div className="lg:text-heading-md text-heading-xs text-base-gray-400">
          {temp_Min} ºc
        </div>
      </div>
    </div>
  )
}

export default Day
