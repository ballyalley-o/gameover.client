import { NavLink } from "react-router-dom"
import { transl } from "utility"

const NavHeaderButton = ({ item }: { item: NavLabelType }) => {
  return (
       <NavLink
            to={(item.to)}
            className={({ isActive }) => isActive ? "nav-header-button button active": 'nav-header-button button'}>
            {transl(item.labelKey)}
        </NavLink>
  )
}

export default NavHeaderButton
