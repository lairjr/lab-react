export const scorePlayer = (player) => {
  return {
    type: 'PLAYER_SCORE',
    player: player
  }
}

export const gameLog = (message) => {
  return {
    type: 'GAME_LOG',
    message: message
  }
}
