import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Citas from "./pages/Citas"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/citas",
        element: <Citas />
    }
])

export default router