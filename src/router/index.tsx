import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import NotFoundPage from "../pages/NotFoundPage"
import FormRegister from "../pages/FormRegisterPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    },
    {
        path: "/daftar",
        element: <FormRegister/>
    }
])

export default router