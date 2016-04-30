const gameLivePlayerReducer = (state = { name: 'Lair Júnior' }, action) => {
  switch(action.type) {
    case 'PLAYER_SCORE':
      return Object.assign({}, action.player, {
        score : action.player.score ? action.player.score + 1 : 1
      });
    default:
      return state;
  }
}

export default gameLivePlayerReducer
