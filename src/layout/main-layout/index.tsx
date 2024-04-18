import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <section className="font-nunito relative ">
      <Outlet />
      <Toaster position="top-center" />
    </section>
  )
}

export default MainLayout
