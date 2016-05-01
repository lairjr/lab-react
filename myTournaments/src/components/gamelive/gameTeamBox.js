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
      <DataTable rows={ players } collums={[ 'Name', 'Score', 'Actions' ]} />
    </div>
  )
}

const DataTable = ({ rows, collums }) => {
  let collumKey = 0;
  let collumsOutput = collums.map(collum => {
    return (
      <th key={ collumKey++ }>
        <a href="#" className="rs-table-sort">
          <span className="rs-table-sort-text">
            { collum }
          </span>
        </a>
      </th>
    )
  });
  return (
    <table className="rs-list-table">
      <thead>
        <tr>
          { collumsOutput }
        </tr>
      </thead>
      <tbody>
        { rows }
      </tbody>
    </table>
  )
}

export default GameTeamBox
