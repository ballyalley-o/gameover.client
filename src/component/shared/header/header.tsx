import { NAV_DIR } from 'config'
import { ASSET_DIR } from 'config/dir.config'
import { Container } from 'design/primitive'
import { NavHeaderButton } from 'component/shared'

const Header = ({ currScreen }: { currScreen: string, onNavigate: (screen: string) => void } ) => {
  return (
    <nav className={"z-40 sticky bg-background border-b-2 border-gray-400/10"}>
        <Container>
          <div className={"cluster h-16"}>
              <div className={'inline'}>
                <a href={"/"} className={"inline"}>
                  <img alt="logo" src={ASSET_DIR.NAV} className={'h-8'} />
                </a>
              </div>
              <div className={'nav-wrapper'}>
                <div className={'nav-menu'}>
                  {NAV_DIR.HEADER.map((_i) => {
                    const isActive = currScreen === _i.id;
                    return (
                      <NavHeaderButton item={_i} isActive={isActive} />
                    )})}
                </div>
                <div className={"league-menu"}>
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
