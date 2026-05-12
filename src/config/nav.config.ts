import type { LocaleKey } from "utility"

const _HEADER_DASHBOARD = [
    { id: 'dashboard', labelKey: 'nav.dashboard' },
    { id: 'draft-room', labelKey: 'nav.draft_room' },
    { id: 'player-stat', labelKey: 'nav.player_stats' }
] satisfies {
  id      : string
  labelKey: LocaleKey
}[]

const _SIDEBAR_DEFAULT = [
    {
        labelKey: 'nav.sidebar.league',
        items: [
            { id: 'standings', labelKey: 'nav.sidebar.items.standings' },
            { id: 'playoffs', labelKey: 'nav.sidebar.items.playoffs' },
            { id: 'calendar', labelKey: 'nav.sidebar.items.calendar' },
            { id: 'transactions', labelKey: 'nav.sidebar.items.transactions' },
            { id: 'power_rankings', labelKey: 'nav.sidebar.items.power_rankings' },
            { id: 'news_feed', labelKey: 'nav.sidebar.items.news_feed' },
        ],
    },
    {
        labelKey: 'nav.sidebar.team',
        items: [
            { id: 'roster', labelKey: 'nav.sidebar.items.roster' },
            { id: 'schedule', labelKey: 'nav.sidebar.items.schedule' },
        ]
    },
    {
        labelKey: 'nav.sidebar.player',
        items: [
            { id: 'stats', labelKey: 'nav.sidebar.items.stats' }
        ]
    }
] satisfies {
  labelKey: LocaleKey
  items: {
    id      : string
    labelKey: LocaleKey
  }[]
}[]

export const NAV_DIR = {
  HEADER : _HEADER_DASHBOARD,
  SIDEBAR: _SIDEBAR_DEFAULT
}
