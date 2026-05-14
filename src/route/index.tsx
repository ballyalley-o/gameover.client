import { createBrowserRouter, Navigate } from "react-router-dom"
import App from 'app'
import { DashboardPage, LeaguePage, TeamPage } from "route/element"

const router = createBrowserRouter([
    {
        path    : "/",
        element : <App />,
        children: [
            {
                index  : true,
                element: <Navigate to="/dashboard" replace />
            },
            {
                path   : 'dashboard',
                element: <DashboardPage />
            },
            {
                path   : 'league/:section',
                element: <LeaguePage />
            },
            {
                path   : 'team/:section',
                element: <TeamPage />
            }
        ]
    }
])

export default router
