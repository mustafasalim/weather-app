import Day from "./day"

const NextDays = () => {
  return (
    <section className="w-full lg:h-52 h-[11rem] bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="lg:w-full lg:h-full w-[20.938rem] h-[9.5rem] flex items-center justify-center">
        <Day
          day="Mon"
          icon="icon"
          detail="32ºc"
          degree="26ºc"
        />
        <Day
          day="Tue"
          icon="icon"
          detail="32ºc"
          degree="26ºc"
        />
        <Day
          day="Wed"
          icon="icon"
          detail="32ºc"
          degree="26ºc"
        />
        <Day
          day="Thu"
          icon="icon"
          detail="32ºc"
          degree="26ºc"
        />
        <Day
          day="Sun"
          icon="icon"
          detail="32ºc"
          degree="26ºc"
        />
      </div>
    </section>
  )
}

export default NextDays
