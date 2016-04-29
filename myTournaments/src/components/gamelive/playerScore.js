import React from 'react'
import { Button } from 'canon-react'

const PlayerScore = ({ player, onClick }) => {
  return (
    <div>
      <label className="rs-control-label">
        Name: {player.name}
      </label>
      <label className="rs-control-label">
        Score: {player.score}
      </label>
      <Button onClick={() => { onClick(player) }}>Score</Button>
    </div>
  )
}

export default PlayerScore
