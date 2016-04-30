import React from 'react'
import { Button } from 'canon-react'

const GameLog = ({ gameLog, onLogAdd }) => {
  let messageField, logKey = 0;
  let log = gameLog.map(logMsg => {
    logKey++;
    return (
      <div key={logKey}>
        <span>{ logMsg }</span>
      </div>
    )
  });
  debugger;
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
