import { NAV_DIR } from 'config'
import { ASSET_DIR } from 'config/dir.config'
import { Container } from 'design/primitive'

const Header = ({ currScreen, onNavigate }: { currScreen: string, onNavigate: (screen: string) => void } ) => {
  return (
    <nav className={"z-40 sticky bg-background"}>
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
                      <button
                        key={_i.id}
                        onClick={() => onNavigate(_i.id)}
                        style={{ background: isActive ?  `var(--color-palette-brand)` : `var(--bg-transparent)` }}
                        className={`button h-full tracking-wide transition-colors cursor-pointer
                          ${isActive
                            ? "text-black"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }`}>
                        {_i.label}
                      </button>
                    )})}
                </div>
                <div className="league-menu">
                  <span>The Baller League</span>
                  <div className="league-avatar" />
                </div>
              </div>
          </div>
        </Container>

    </nav>
  )
}

export default Header
