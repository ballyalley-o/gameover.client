import { en, fr, es } from "locale"
import { LocaleKey } from "utility"

declare global {
    declare module "*.css"
    declare type AppLocale = typeof en | typeof fr | typeof es

    declare type AppValueScaleType = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    declare type NavLabelType =  {
      id       : string
      labelKey : LocaleKey
      to       : string
      icon    ?: React.ReactNode
    }
}
