import React, { PropTypes } from 'react'
import { Button } from 'canon-react'

const PlayerScore = ({ player, onClick }) => {
  return (
    <tr>
      <td className="rs-table-text">
        { player.name }
      </td>
      <td className="rs-table-text">
        { player.score }
      </td>
      <td className="rs-table-text">
        <Button onClick={() => { onClick(player) }}>Score</Button>
      </td>
    </tr>
  )
}

PlayerScore.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default PlayerScore
