import { Plus } from 'lucide-react'
import { Card } from 'design/primitive'

const scoreTeams = [
  { abbr: 'OKC', score: 123, color: 'blue', mark: 'OKC' },
  { abbr: 'SAS', score: 72, color: 'light', mark: 'SAS' },
  { abbr: 'CHI', score: 133, color: 'red', mark: 'CHI' },
  { abbr: 'LAL', score: 93, color: 'gold', mark: 'LAL', favorite: true },
]

const stats = [
  { label: 'Record', value: '48-12', trend: 'W4', tone: 'up' },
  { label: 'Power Ranking', value: '14', trend: '▲ 1', tone: 'up' },
  { label: 'Points Per Game', value: '102.5', trend: '▼', tone: 'down' },
  { label: 'Users', value: '4' },
]

const rankings = [
  { team: 'Los Angeles Lakers', movement: '▲ 1', tone: 'up' },
  { team: 'Utah Jazz' },
  { team: 'Miami Heat', movement: '▼ 2', tone: 'down' },
]

const standings = [
  { team: 'Detroit Pistons', wins: 51, losses: 9, owner: '@somedude', streak: 'W9', tone: 'up' },
  { team: 'Los Angeles Lakers', wins: 48, losses: 12, owner: '@yourusername', streak: 'W4', tone: 'up' },
  { team: 'Utah Jazz', wins: 46, losses: 13, owner: 'CPU', streak: 'L1', tone: 'down' },
]

const teamStats = [
  { label: 'Points', rank: '(1st)', value: '132.0' },
  { label: 'Allowed', rank: '(29th)', value: '112.14' },
  { label: 'Rebounds', rank: '(29th)', value: '39.2' },
  { label: 'Assists', rank: '(2nd)', value: '31.0' },
]

const games = [
  { opponent: 'vs SAS', mark: 'SAS', meta: '72-93', result: 'W' },
  { opponent: 'vs MEM', mark: 'MEM', meta: 'Arena', result: '14' },
  { opponent: '@ CHI', mark: 'CHI', meta: 'Arena', result: '17' },
  { opponent: '@ OKC', mark: 'OKC', meta: 'Arena', result: '18' },
]

const leaders = ['L.James 30.1', 'T.McGrady 29.7', 'K.Bryant 29.6', 'K.Bryant 29.6']

const TeamBadge = ({ mark, color = 'dark' }: { mark: string, color?: string }) => (
  <div className={`team-badge team-badge-${color}`}>{mark}</div>
)

function DashboardPage() {

  return (
    <div className={'dashboard-page'}>
      <section className={'score-strip'}>
        <div className={'score-board'}>
          {scoreTeams.map((team) => (
            <div key={team.abbr} className={`score-team score-team-${team.color}`}>
              <TeamBadge mark={team.mark} color={team.color} />
              <span>{team.abbr}</span>
              {team.favorite && <span className={'score-star'}>*</span>}
              <strong>{team.score}</strong>
            </div>
          ))}
        </div>
        <button className={'score-next'} aria-label={'Next score'}>▶</button>
      </section>

      <section className={'dashboard-stats-grid'}>
        {stats.map((stat) => (
          <Card key={stat.label} className={'metric-card'}>
            <div className={'metric-header'}>
              <span>{stat.label}</span>
              {stat.trend && <span className={`metric-trend metric-trend-${stat.tone}`}>{stat.trend}</span>}
            </div>
            <strong>{stat.value}</strong>
          </Card>
        ))}
      </section>

      {/* buttons in the middle */}
      <section className={'dashboard-actions'}>
        <button className={'dashboard-primary-action'}>
          <span>Start Draft</span>
          <Plus aria-hidden={'true'} />
        </button>
        <button className={'dashboard-secondary-action'}>Invite Users</button>
      </section>

      <section className={'dashboard-content-grid'}>
        <Card className={'power-panel'}>
          <h2>Power Rankings</h2>
          <div className={'dashboard-list'}>
            {rankings.map((item) => (
              <div key={item.team} className={'dashboard-list-row'}>
                <span>{item.team}</span>
                {item.movement && <strong className={`metric-trend metric-trend-${item.tone}`}>{item.movement}</strong>}
              </div>
            ))}
          </div>
        </Card>

        <Card className={'standings-panel'}>
          <div className={'panel-header'}>
            <h2>Standings</h2>
            <div className={'panel-tabs'}>
              <span className={'active'}>League</span>
              <span>Western</span>
              <span>Eastern</span>
            </div>
          </div>
          <div className={'standings-table'}>
            {standings.map((team) => (
              <div key={team.team} className={'standings-row'}>
                <span>{team.team}</span>
                <strong>{team.wins}</strong>
                <strong>{team.losses}</strong>
                <span>{team.owner}</span>
                <strong className={`metric-trend metric-trend-${team.tone}`}>{team.streak}</strong>
              </div>
            ))}
          </div>
        </Card>

        <div className={'dashboard-side-grid'}>
          <Card className={'card'}>
            <h2>Team Stats</h2>
            <div className={'stat-table'}>
              {teamStats.map((item) => (
                <div key={item.label} className={'stat-row'}>
                  <span>{item.label}</span>
                  <strong>{item.rank}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className={'leader-panel'}>
            <h2>League Leaders</h2>
            <div className={'stat-table'}>
              {teamStats.map((item) => (
                <div key={item.label} className={'stat-row'}>
                  <span>{item.label}</span>
                  <strong>{item.rank}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className={'calendar-panel'}>
            <h2>Calendar</h2>
            <div className={'game-card-row'}>
              {games.map((game) => (
                <div key={game.opponent} className={'game-card'}>
                  <strong>{game.opponent}</strong>
                  <TeamBadge mark={game.mark} />
                  <small>{game.meta}</small>
                  <span>{game.result}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className={'leader-ticker'}>
        <span>PPG</span>
        {leaders.map((leader) => <strong key={leader}>{leader}</strong>)}
      </section>
    </div>
  )
}

export default DashboardPage
