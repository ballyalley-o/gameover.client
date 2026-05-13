import { Sidebar } from "component/shared/sidebar"
import { NAV_DIR } from "config"
import { transl } from "utility"

function DashboardPage() {

  return (
    <div className={'flex min-h-[calc(100vh-60px)]'}>
      <aside  className={"text-md w-56 border-r border-gray-400/10  shrink-0 py-3 flex flex-col gap-1 pl-5 pr-2"} style={{ background: "var(--sidebar)" }}>
        <div className={"px-4 py-1 mb-1 space-y-2"}>
          <div>{transl('nav.sidebar.league_lounge')}</div>
        </div>
        <div className={"border-t border-border border-gray-400/10 mb-1"} />
        {NAV_DIR.SIDEBAR.map((_s) => (
          <Sidebar key={_s.labelKey} labelKey={_s.labelKey} items={_s.items}/>
        ))}
      </aside>
    </div>
  )
}

export default DashboardPage