import { connect } from 'react-redux'
import { scorePlayer } from '../actions/gameLiveActions'
import GameTeamBox from '../components/gamelive/gameTeamBox'

const mapStateToProps = (state) => {
  return {
    team: state.gameLiveTeamReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerClick: (player) => {
      dispatch(scorePlayer(player))
    }
  }
}

const GameTeamBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameTeamBox)

export default GameTeamBoxContainer
