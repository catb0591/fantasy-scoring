const calculateScore = (player) => {
  switch (player.position)
  {
    case 'QB': return QBResults(player)
      break;
    case 'RB': return RBResults(player)
      break;
    case 'WR': return WRResults(player)
      break;
    case 'TE': return TEResults(player)
      break;
    default: return 0
      break;
  }
}

const QBResults = (player) => {
  const results = (player.stats.passing.yards / 25) +
        (player.stats.passing.touchdowns * 6) +
        (player.stats.passing.interceptions * -3) +
        (player.stats.rushing.yards / 10) +
        (player.stats.rushing.touchdowns * 6) +
        (player.stats.rushing.fumbles * -3)


  return results
}

const RBResults = (player) => {
  const results = (player.stats.rushing.yards / 10) +
        (player.stats.rushing.touchdowns * 6) +
        (player.stats.rushing.fumbles * -3) +
        (player.stats.receiving.receptions) +
        (player.stats.receiving.yards / 10) +
        (player.stats.receiving.touchdowns * 6) +
        (player.stats.receiving.fumbles * -3) +
        (player.stats.return.kickreturn.yards / 15) +
        (player.stats.return.kickreturn.touchdowns * 6) +
        (player.stats.return.kickreturn.fumbles * -3) +
        (player.stats.return.puntreturn.yards / 15) +
        (player.stats.return.puntreturn.touchdowns * 6) +
        (player.stats.return.puntreturn.fumbles * -3)

  return results
}

const WRResults = (player) => {
  const results = (player.stats.rushing.yards / 10) +
        (player.stats.rushing.touchdowns * 6) +
        (player.stats.rushing.fumbles * -3) +
        (player.stats.receiving.receptions) +
        (player.stats.receiving.yards / 10) +
        (player.stats.receiving.touchdowns * 6) +
        (player.stats.receiving.fumbles * -3) +
        (player.stats.return.kickreturn.yards / 15) +
        (player.stats.return.kickreturn.touchdowns * 6) +
        (player.stats.return.kickreturn.fumbles * -3) +
        (player.stats.return.puntreturn.yards / 15) +
        (player.stats.return.puntreturn.touchdowns * 6) +
        (player.stats.return.puntreturn.fumbles * -3)

  return results
}

const TEResults = (player) => {
  const results = (player.stats.receiving.receptions) +
        (player.stats.receiving.yards / 10) +
        (player.stats.receiving.touchdowns * 6) +
        (player.stats.receiving.fumbles * -3)

  return results
}

module.exports = calculateScore

