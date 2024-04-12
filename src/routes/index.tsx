import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/main-layout"
import Home from "../pages/home"
import Weather from "../pages/weather"
import NotFound from "../pages/404"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/allergy",
        element: "allergy",
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])
