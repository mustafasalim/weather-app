import ReactDOM from "react-dom/client"
import "./style/css/tailwind.css"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
)
