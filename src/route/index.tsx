import { createBrowserRouter } from "react-router-dom"
import App from 'app'
import { DashboardPage } from "page"

const router = createBrowserRouter([
    {
        path    : "/",
        element : <App />,
        children: [
            {
                index  : true,
                path   : '/dashboard',
                element: <DashboardPage />
            }
        ]
    }
])


export default router