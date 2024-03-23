import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <section className=" font-nunito">
      <Outlet />
    </section>
  )
}

export default MainLayout
