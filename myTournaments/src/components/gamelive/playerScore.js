import React, { PropTypes } from 'react'
import { Button } from 'canon-react'

const PlayerScore = ({ player, onClick }) => {
  return (
    <div>
      <h5>
        Name {player.name}
      </h5>
      <h5>
        Score {player.score}
      </h5>
      <Button onClick={() => { onClick(player) }}>Score</Button>
    </div>
  )
}

PlayerScore.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default PlayerScore
