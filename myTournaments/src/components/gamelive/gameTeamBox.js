import React from 'react'
import PlayerScore from '../../components/gamelive/playerScore'

const GameTeamBox = ({ team, onPlayerClick }) => {
  let players = team.players.map(player =>
    <PlayerScore
      key={player.id}
      player={player}
      onClick={() => { onPlayerClick(player) }} />
  );
  return (
    <div>
      <label className="rs-control-label">
        Name: {team.name}
      </label>
      <label className="rs-control-label">
        Score: {team.score}
      </label>
      { players }
    </div>
  )
}

export default GameTeamBox
