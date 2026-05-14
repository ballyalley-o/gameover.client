import { Outlet } from "react-router-dom"
import { Header } from "component/shared/header"
import { Sidebar, SidebarBackButton } from "component/shared/sidebar"
import { NAV_DIR } from "config"

function App() {

  return (
    <div className={"App"}>
      <Header />
      <div className={"app-shell"}>
        <aside className={"app-sidebar sidebar"}>
          <SidebarBackButton item={{ id: 'back', labelKey: 'back', to: '/' }} />
          <div className={"sidebar-divider"} />
          {NAV_DIR.SIDEBAR.map((_s) => (
            <Sidebar key={_s.labelKey} labelKey={_s.labelKey} items={_s.items}/>
          ))}
        </aside>
        <main className={"app-main"}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
