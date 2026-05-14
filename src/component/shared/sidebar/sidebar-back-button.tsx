import { NAV_DIR } from 'config'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavSidebarButton } from 'component/shared/nav'
import { MoveLeft } from 'lucide-react'

const SidebarBackButton = ({ item }: { item: NavLabelType }) => {
  const location   = useLocation()
  const navigate   = useNavigate()
  const prevLoc    = location.state?.from ?? NAV_DIR.DASHBOARD
  const handleBack = () => {
    navigate(prevLoc)
  }
  return (
    <div className={"sidebar-back-button flex align-middle"} onClick={handleBack}>
      <MoveLeft />
      <span><NavSidebarButton item={item}/></span>
    </div>
  )
}

export default SidebarBackButton