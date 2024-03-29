import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <section className="font-nunito">
      <Outlet />
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
    </section>
  )
}

export default MainLayout
