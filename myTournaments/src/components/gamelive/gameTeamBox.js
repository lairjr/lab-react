import React from 'react'

const GameTeamBox = ({ team }) => {
  return (
    <div>
      <label className="rs-control-label">
        Name: {team.name}
      </label>
      <label className="rs-control-label">
        Score: {team.score}
      </label>
    </div>
  )
}

export default GameTeamBox
