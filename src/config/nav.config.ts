import type { LocaleKey } from "utility"

const _HEADER_DASHBOARD = [
    { id: 'dashboard', labelKey: 'nav.dashboard', to: '/dashboard' },
    { id: 'draft-room', labelKey: 'nav.draft_room', to: '/draft-room'},
    { id: 'player-stat', labelKey: 'nav.player_stats', to: '/player-stat' }
] satisfies NavLabelType[]

const _SIDEBAR_DEFAULT = [
    {
        labelKey: 'nav.sidebar.league',
        items: [
            { id: 'standings', labelKey: 'nav.sidebar.items.standings', to: '/league/dashboard' },
            { id: 'playoffs', labelKey: 'nav.sidebar.items.playoffs', to: '/league/playoff' },
            { id: 'calendar', labelKey: 'nav.sidebar.items.calendar', to: '/league/calendar' },
            { id: 'transactions', labelKey: 'nav.sidebar.items.transactions', to: '/league/transaction' },
            { id: 'power_rankings', labelKey: 'nav.sidebar.items.power_rankings', to: '/league/power-ranking'},
            { id: 'news_feed', labelKey: 'nav.sidebar.items.news_feed', to: '/league/news-feed' },
        ],
    },
    {
        labelKey: 'nav.sidebar.team',
        items: [
            { id: 'roster', labelKey: 'nav.sidebar.items.roster', to: '/team/calendar' },
            { id: 'schedule', labelKey: 'nav.sidebar.items.schedule', to: '/team/schedule'},
        ]
    },
    {
        labelKey: 'nav.sidebar.player',
        items: [
            { id: 'stats', labelKey: 'nav.sidebar.items.stats', to: '/team/stat' }
        ]
    }
] satisfies {
  labelKey: LocaleKey
  items   : NavLabelType[]
}[]

export const NAV_DIR = {
  HEADER : _HEADER_DASHBOARD,
  SIDEBAR: _SIDEBAR_DEFAULT
}
