interface DayProps {
  day: string
  icon: any
  degree: string
  detail: string
}

const Day = (props: DayProps) => {
  const { day, icon, detail, degree } = props
  return (
    <div className="flex flex-col items-center justify-evenly gap-1 w-[4.188rem] h-full">
      <div className="text-heading-xs text-base-gray-200">{day}</div>
      <div className="text-heading-xs text-base-gray-200">{icon}</div>
      <div>
        <div className="text-heading-xs text-base-gray-200">{degree}</div>
        <div className="text-heading-xs text-base-gray-400">{detail}</div>
      </div>
    </div>
  )
}

export default Day
