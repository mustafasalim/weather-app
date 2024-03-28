import { useEffect } from "react"
import SuggestionAutocomplete from "../../components/shared/suggestion-autocomplete"
import Logo from "../../components/ui/logo"
import { useNavigate } from "react-router-dom"
import { useGeolocation } from "react-use"

const Home = () => {
  // retrieves location information if user location is turned on
  const geoLocation = useGeolocation()
  //routing process
  const navigate = useNavigate()

  // query by location if user location is turned on
  useEffect(() => {
    if (geoLocation && !geoLocation.error) {
      if (geoLocation.latitude !== null && geoLocation.longitude !== null) {
        const searchParams = new URLSearchParams()
        //updates search parameters
        searchParams.set("lat", geoLocation.latitude.toString())
        searchParams.set("lon", geoLocation.longitude.toString())

        navigate(
          {
            pathname: "/weather",
            search: searchParams.toString(),
          },
          { replace: true }
        )
      }
    }
  }, [geoLocation])
  return (
    <div className="w-full h-screen bg-home-background bg-cover bg-center flex flex-col gap-y-32">
      <div className="w-full h-40 flex items-center justify-center">
        <Logo />
      </div>
      <div className="w-full h-[140px] flex flex-col items-center justify-between gap-y-4">
        <div className="w-full h-[52px] flex flex-col items-center justify-center gap-y-1">
          <h1 className="lg:text-heading-lg text-heading-md text-base-gray-100">
            Welcome to
            <span className="text-product-blue-light"> TypeWeather</span>
          </h1>
          <h2 className="lg:text-lg text-sm text-base-gray-200">
            Choose a location to see the weather forecast
          </h2>
        </div>
        <div className="z-10">
          <SuggestionAutocomplete size="large" />
        </div>
      </div>
    </div>
  )
}

export default Home
