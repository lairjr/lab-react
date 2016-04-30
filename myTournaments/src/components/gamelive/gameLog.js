import React from 'react'
import { Button } from 'canon-react'

const GameLog = ({ gameLog, onLogAdd }) => {
  let messageField;
  let log = gameLog.map(logMsg => {
    return (
      <div>
        { logMsg }
      </div>
    )
  });
  return (
    <div>
      { log }
      <label className="rs-control-label">
        Message:
      </label>
      <div className="rs-controls">
        <textarea className="rs-input-xlarge" ref={ msg => { messageField = msg }}></textarea>
      </div>
      <Button onClick={() => { onLogAdd(messageField.value) }}>Add</Button>
    </div>
  )
}

export default GameLog
