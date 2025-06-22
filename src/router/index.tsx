import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import NotFoundPage from "../pages/NotFoundPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])

export default router