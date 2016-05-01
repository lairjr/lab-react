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
      <h3>
        Name: {team.name}
      </h3>
      <h3>
        Score: {team.score}
      </h3>
      { players }
    </div>
  )
}

export default GameTeamBox
