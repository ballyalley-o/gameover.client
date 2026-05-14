import { lazy } from "react"
import { Loadable } from "route/loadable"

export const DashboardPage = Loadable(lazy(() => import("page/dashboard/dashboard")))
export const LeaguePage = Loadable(lazy(() => import('page/league/league')))
export const TeamPage = Loadable(lazy(() => import('page/team/league')))
