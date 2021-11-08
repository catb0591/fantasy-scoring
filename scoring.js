const calculateScore = (player) => {
  switch (player.position)
  {
    case 'QB': return QBResults(player)
      break;
    case 'RB':
    case 'WR': return WRResults(player)
      break;
    case 'TE': return TEResults(player)
      break;
    default: return 0
      break;
  }
}

const QBResults = (player) => {
  const passingYards = player.stats.passing.yards
  const rushingYards = player.stats.rushing.yards
  const touchdowns = player.stats.rushing.touchdowns + player.stats.passing.touchdowns
  const fumblesAndInterceptions = player.stats.rushing.fumbles + player.stats.passing.interceptions

  const results = (passingYards / 25) + (touchdowns * 6) + (fumblesAndInterceptions * -3) + (rushingYards / 10)

  return results
}

const RBResults = (player) => {
  const rushingAndRecievingYards = player.stats.rushing.yards + player.stats.receiving.yards
  const returnYards = player.stats.return.kickreturn.yards + player.stats.return.puntreturn.yards
  const touchdowns = player.stats.rushing.touchdowns + player.stats.receiving.touchdowns + player.stats.return.kickreturn.touchdowns + player.stats.return.puntreturn.touchdowns
  const fumbles = player.stats.rushing.fumbles + player.stats.receiving.fumbles + player.stats.return.kickreturn.fumbles + player.stats.return.puntreturn.fumbles
  const receptions = player.stats.receiving.receptions 

  const results = (rushingAndRecievingYards / 10) + (touchdowns * 6) + (fumbles * -3) + (receptions) + (returnYards / 15) 

  return results
}

const WRResults = (player) => {
  const rushingAndRecievingYards = player.stats.rushing.yards + player.stats.receiving.yards
  const returnYards = player.stats.return.kickreturn.yards + player.stats.return.puntreturn.yards
  const touchdowns = player.stats.rushing.touchdowns + player.stats.receiving.touchdowns + player.stats.return.kickreturn.touchdowns + player.stats.return.puntreturn.touchdowns
  const fumbles = player.stats.rushing.fumbles + player.stats.receiving.fumbles + player.stats.return.kickreturn.fumbles + player.stats.return.puntreturn.fumbles
  const receptions = player.stats.receiving.receptions

  const results = (rushingAndRecievingYards / 10) + (touchdowns * 6) + (fumbles * -3) + (receptions) + (returnYards / 15)

  return results
}

const TEResults = (player) => {
  const receptions = player.stats.receiving.receptions
  const recievingYards = player.stats.receiving.yards
  const touchdowns = player.stats.receiving.touchdowns
  const fumbles = player.stats.receiving.fumbles

  const results = (receptions) + (recievingYards / 10) + (touchdowns * 6) + (fumbles * -3)

  return results
}

module.exports = calculateScore

