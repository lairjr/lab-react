const gameLiveTeamReducer = (state = {}, action) => {
  let initialState = {
    name: 'São Luís',
    players: [
      {
        id: 1,
        name: 'Lair Júnior'
      },
      {
        id: 2,
        name: 'Rafael Knipoff'
      }
    ]
  }
  switch (action.type) {
    case 'PLAYER_SCORE':
      state.players = state.players.map(player => {
        if (player.id === action.player.id)
          return Object.assign({}, player, {
            score: player.score ? player.score + 1 : 1
          })
        return player;
      });

      return Object.assign({}, state, {
        score : state.score ? state.score + 1 : 1
      });
    default:
      return state.name ? state : initialState;
  }
}

export default gameLiveTeamReducer
