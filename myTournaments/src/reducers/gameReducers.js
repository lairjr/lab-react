import { combineReducers } from 'redux'
import gameLiveReducer from './gameLiveReducer'
import gameLogReducer from './gameLogReducer'

export default combineReducers({
  gameLiveReducer,
  gameLogReducer
})
