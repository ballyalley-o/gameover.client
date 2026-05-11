import { en, fr, es } from "locale"

declare global {
    declare module "*.css"
    declare type AppLocale = typeof en | typeof fr | typeof es

    declare type AppValueScaleType = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}
