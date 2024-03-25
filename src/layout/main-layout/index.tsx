import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const MainLayout = () => {
  return (
    <section className="font-nunito">
      <Outlet />
      <Toaster position="bottom-right" />
    </section>
  )
}

export default MainLayout
