const gameLogReducer = (state = [], action) => {
  switch (action.type) {
    case 'GAME_LOG':
      return [
        ...state,
        action.message
      ];
      break;
    default:
      return state;
  }
}

export default gameLogReducer
