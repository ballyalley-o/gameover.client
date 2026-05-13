import { NavLink } from 'react-router-dom'
import { transl } from 'utility'

const NavSidebarButton = ({ item }: { item: NavLabelType }) => {
  return (
    <NavLink
        to={item.to}
        className={({ isActive }) => isActive ? 'nav-sidebar active' : 'nav-sidebar'}>
        {item.icon}
        <span>{transl(item.labelKey)}</span>
    </NavLink>
  )
}

export default NavSidebarButton