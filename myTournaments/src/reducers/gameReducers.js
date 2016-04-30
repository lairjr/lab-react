import { combineReducers } from 'redux'
import gameLogReducer from './gameLogReducer'
import gameLiveTeamReducer from './gameLiveTeamReducer'

export default combineReducers({
  gameLogReducer,
  gameLiveTeamReducer
})
