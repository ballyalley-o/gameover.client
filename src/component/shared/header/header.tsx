import { ASSET_DIR } from 'config/dir.config'
import { Container } from 'design/primitive'
import { formatText } from 'utility'

const Header = ({ title }: { title: string }) => {
  return (
    <div className={"z-40 sticky top-0 bg-background"}>
      <header className={'header'}>
        <Container>
          <div className={"cluster"}>
            <div className={'inline'}>
              <a href={"/"} className={"inline"}>
                <img alt="logo" src={ASSET_DIR.LOGO} className={'h-12 w-12'} />
              </a>
              <span className={'hidden lg:block text-xl'}>{formatText(title, 'capitalize')}</span>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Header