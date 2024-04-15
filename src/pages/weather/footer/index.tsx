import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-base-gray-800 flex flex-col items-center justify-center pt-10 pb-10 gap-y-3">
      <Link
        to="/"
        className="mb-5"
      >
        <img
          src="./images/logo/main-logo.svg"
          alt=""
        />
      </Link>

      <div className="flex items-center lg:w-full lg:justify-center w-56  gap-x-4 text-base-gray-400 text-heading-xs">
        <span className="hover:text-base-gray-300 transition-colors">
          Feedback
        </span>
        <span className="hover:text-base-gray-300 transition-colors">
          Weather api
        </span>
      </div>
      <div className="lg:flex  lg:flex-row flex-col lg:w-full w-56 justify-center items-center  lg:gap-x-4 text-center text-base-gray-400 lg:text-heading-sm text-heading-xs ">
        <span className="border-r flex border-base-gray-300 lg:px-4 hover:text-blue-500 transition-colors">
          Terms of Use
        </span>
        <span className="border-r flex border-base-gray-300 lg:px-4 hover:text-blue-500 transition-colors">
          Privacy Policy
        </span>
        <span className="border-r flex border-base-gray-300 lg:px-4 hover:text-blue-500 transition-colors">
          Accessibility Statement
        </span>
        <span className="border-r flex border-base-gray-300 lg:px-4 hover:text-blue-500 transition-colors">
          Data Vendors
        </span>
      </div>
      <div className="flex flex-col lg:w-full w-56 items-center lg:text-center hover:text-base-gray-200 transition-colors text-base-gray-300 text-heading-xs">
        <span>
          We recognise our responsibility to use data and technology for good.
        </span>
        <span>
          We may use or share your data with our data vendors. Take control of
          your data.
        </span>
      </div>
      <div className="text-heading-xs lg:w-full lg:flex lg:justify-center w-56 hover:text-base-gray-300 transition-colors text-base-gray-400">
        © IWeather Company, Mustafa Salim 2024
      </div>
    </footer>
  )
}

export default Footer
