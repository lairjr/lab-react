const gameLiveTeamReducer = (state = { name: 'São Luís ' }, action) => {
  switch (action.type) {
    case 'PLAYER_SCORE':
    debugger;
      return Object.assign({}, state, {
        score : action.player.score ? action.player.score + 1 : 1
      });
    default:
      return state;
  }
}

export default gameLiveTeamReducer
