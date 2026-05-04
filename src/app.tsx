import { GLOBAL } from "config"
import { Outlet } from "react-router-dom"
import { Header } from "component/shared/header"

function App() {
  return (
    <div className={"App"}>
      <Header title={GLOBAL.APP_NAME} />
      <Outlet />
    </div>
  )
}

export default App
