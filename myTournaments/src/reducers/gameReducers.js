import { combineReducers } from 'redux'
import gameLiveReducer from './gameLiveReducer'
import gameLogReducer from './gameLogReducer'
import gameLiveTeamReducer from './gameLiveTeamReducer'

export default combineReducers({
  gameLiveReducer,
  gameLogReducer,
  gameLiveTeamReducer
})
