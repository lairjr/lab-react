require('normalize.css/normalize.css');
//require('styles/App.css');
import React from 'react';
import GameLiveContainer from '../containers/gameLiveContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <GameLiveContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
