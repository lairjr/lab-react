import { connect } from 'react-redux'
import GameTeamBox from '../components/gamelive/gameTeamBox'

const mapStateToProps = (state) => {
  return {
    team: state.gameLiveTeamReducer
  }
}

const GameTeamBoxContainer = connect(
  mapStateToProps
)(GameTeamBox)

export default GameTeamBoxContainer
