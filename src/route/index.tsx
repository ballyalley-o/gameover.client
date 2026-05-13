import { createBrowserRouter } from "react-router-dom"
import App from 'app'
import { DashboardPage, LeaguePage } from "route/element"

const router = createBrowserRouter([
    {
        path    : "/",
        element : <App />,
        children: [
            {
                index  : true,
                path   : '/dashboard',
                element: <DashboardPage />
            },
            {
                path   : 'league',
                element: <LeaguePage />
            }
        ]
    },
    // {
    //     path   : "league",
    //     element: <LeaguePage />
    // }
])


export default router