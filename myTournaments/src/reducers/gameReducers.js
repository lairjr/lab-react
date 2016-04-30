import { combineReducers } from 'redux'
import gameLivePlayerReducer from './gameLivePlayerReducer'
import gameLogReducer from './gameLogReducer'
import gameLiveTeamReducer from './gameLiveTeamReducer'

export default combineReducers({
  gameLivePlayerReducer,
  gameLogReducer,
  gameLiveTeamReducer
})
