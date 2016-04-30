require('normalize.css/normalize.css');
//require('styles/App.css');
import React from 'react';
import GameLiveContainer from '../containers/gameLiveContainer'
import GameLogContainer from '../containers/gameLogContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <GameLiveContainer />
        <GameLogContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
