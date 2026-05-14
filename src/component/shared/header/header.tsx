import { NAV_DIR } from 'config'
import { Container } from 'design/primitive'
import { NavHeaderButton } from 'component/shared'
import { BrandNavLogo } from 'component/shared/brand'

const Header = () => {
  return (
    <nav className={"z-40 sticky bg-background border-b-2 border-gray-400/10"}>
        <Container>
          <div className={"cluster h-16"}>
            <BrandNavLogo />
              <div className={'nav-wrapper'}>
                <div className={'nav-menu'}>
                  {NAV_DIR.HEADER.map((_i) => {
                    return (
                      <NavHeaderButton key={_i.id} item={_i} />
                    )})}
                </div>
                <div className={"league-menu"}>
                  {/* user component */}
                  <span>The Baller League</span>
                  <div className={"league-avatar"} />
                </div>
              </div>
          </div>
        </Container>

    </nav>
  )
}

export default Header
