import { connect } from 'react-redux'
import { scorePlayer } from '../actions/gameLiveActions'
import PlayerScore from '../components/gamelive/playerScore'

const mapStateToProps = (state) => {
  return {
    player: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (player) => {
      dispatch(scorePlayer(player))
    }
  }
}

const GameLiveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerScore)

export default GameLiveContainer
