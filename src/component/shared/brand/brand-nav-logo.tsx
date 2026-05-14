import { NAV_DIR } from "config"
import { ASSET_DIR } from "config/dir.config"

const BrandNavLogo = () => {
  return (
        <div className={'inline'}>
            <a href={NAV_DIR.ROOT} className={"inline"}>
                <img alt="logo" src={ASSET_DIR.NAV} className={'brand-logo-size'} />
            </a>
        </div>
  )
}

export default BrandNavLogo