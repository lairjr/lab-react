import { connect } from 'react-redux'
import { scorePlayer } from '../actions/gameLiveActions'
import PlayerScore from '../components/gamelive/playerScore'

const mapStateToProps = (state) => {
  return {
    player: state.gameLivePlayerReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (player) => {
      dispatch(scorePlayer(player))
    }
  }
}

const GameLivePlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerScore)

export default GameLivePlayerContainer
