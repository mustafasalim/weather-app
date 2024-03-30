import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      <img
        className="-z-10 absolute top-0 object-cover flex w-full h-full"
        src="./images/bg-images/home-bg-image.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-center">
        <div className=" lg:text-heading-xl text-heading-lg text-gray-100">
          404
        </div>
        <Link
          className=" underline text-heading-sm lg:text-heading-md text-product-blue-light"
          to="/"
        >
          home page
        </Link>
      </div>
    </section>
  )
}

export default NotFound
