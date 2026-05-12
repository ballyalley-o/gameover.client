import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "component/shared/header"
import { Dashboard } from "page/dashboard/dashboard"

function App() {
  const [currScreen, setCurrScreen] = useState('dashboard')
  return (
    <div className={"App"}>
      <Header currScreen={currScreen}onNavigate={setCurrScreen} />
      {currScreen === 'dashboard' && <Dashboard />}
      <Outlet />
    </div>
  )
}

export default App
