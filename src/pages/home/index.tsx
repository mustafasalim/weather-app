import GeoLocation from "../../components/shared/geo-location"
import SuggestionAutocomplete from "../../components/shared/suggestion-autocomplete"
import { motion } from "framer-motion"
import ErrorBoundary from "../../error-boundry"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full h-screen overflow-hidden flex flex-col gap-y-32">
        <img
          className="absolute top-0 left-0 -z-10 object-cover w-full h-full flex"
          src="./images/bg-images/home-bg-image.png"
          alt=""
        />
        <NavLink
          className="w-full h-40 flex items-center justify-center"
          to="/"
        >
          <img
            src="./images/logo/main-logo.svg"
            alt=""
          />
        </NavLink>
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
          <ErrorBoundary>
            <GeoLocation />
          </ErrorBoundary>
          <div className=" w-full flex items-center justify-center">
            <ErrorBoundary>
              <SuggestionAutocomplete size="large" />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
