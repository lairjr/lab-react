const gameLiveReducer = (state, action) => {
  switch(action.type) {
    case 'PLAYER_SCORE':
      return Object.assing({}, action.player, {
        score : action.player.score + 1
      });
    default:
      return state;
  }
}

export default gameLiveReducer
