import { connect } from 'react-redux'
import { gameLog } from '../actions/gameLiveActions'
import GameLog from '../components/gamelive/gameLog'

const mapStateToProps = (state) => {
  return {
    gameLog: state.gameLogReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogAdd: (message) => {
      dispatch(gameLog(message))
    }
  }
}

const GameLogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLog)

export default GameLogContainer
