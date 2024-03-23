import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/main-layout"
import Home from "../pages/home"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
