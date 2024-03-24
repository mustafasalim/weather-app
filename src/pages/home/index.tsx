import AutoComplete from "../../components/ui/auto-complete"
import Logo from "../../components/ui/logo"

const Home = () => {
  return (
    <div className="w-full h-screen bg-home-background bg-cover bg-center flex flex-col gap-y-32">
      <div className="w-full h-40 flex items-center justify-center">
        <Logo />
      </div>
      <div className="w-full h-[140px] flex flex-col items-center justify-between gap-y-4">
        <div className="w-full h-[52px] flex flex-col items-center justify-center gap-y-1">
          <h1 className=" text-heading-md text-base-gray-100">
            Welcome to
            <span className="text-product-blue-light"> TypeWeather</span>
          </h1>
          <h2 className="text-sm text-base-gray-200">
            Choose a location to see the weather forecast
          </h2>
        </div>
        <div className="z-10">
          <AutoComplete data={["mustafa", "fawfaw", "f1"]} />
        </div>
      </div>
    </div>
  )
}

export default Home