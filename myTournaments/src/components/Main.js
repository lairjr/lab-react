require('normalize.css/normalize.css');
//require('styles/App.css');
import React from 'react';
import GameLivePlayerContainer from '../containers/gameLivePlayerContainer'
import GameLogContainer from '../containers/gameLogContainer'
import GameTeamBoxContainer from '../containers/gameTeamContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <GameTeamBoxContainer />
        <GameLivePlayerContainer />
        <GameLogContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
