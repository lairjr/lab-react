require('normalize.css/normalize.css');
//require('styles/App.css');
import React from 'react';
import GameLogContainer from '../containers/gameLogContainer'
import GameTeamBoxContainer from '../containers/gameTeamContainer'

class AppComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main">
        <GameTeamBoxContainer />
        <GameLogContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
