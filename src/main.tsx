import ReactDOM from "react-dom/client"
import "./style/css/tailwind.css"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
)
