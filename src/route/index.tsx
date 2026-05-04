import { createBrowserRouter } from "react-router-dom"
import App from 'app'

const router = createBrowserRouter([
    {
        path    : "/",
        element : <App />,
        children: [
            {
                index: true,
                element: <div>{'home'}</div>
            }
        ]
    }
])


export default router