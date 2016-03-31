'use strict';

import React from 'react';

require('styles/gamelive/Score.sass');

class ScoreComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      awayScore: 0,
      awayTeamAcronym: 'São Luís',
      homeScore: 0,
      homeTeamAcronym: 'Cosseno'
    };
  }
  render() {
    return (
      <div className="score">
        <div className="scorePoints">
          {this.state.homeScore}
          {this.state.homeTeamAcronym}
        </div>
        <div className="versus">
          vs.
        </div>
        <div className="scorePoints">
          {this.state.awayScore}
          {this.state.awayTeamAcronym}
        </div>
      </div>
    );
  }
}

ScoreComponent.displayName = 'GameliveScoreComponent';

// Uncomment properties you need
// ScoreComponent.propTypes = {};
// ScoreComponent.defaultProps = {};

export default ScoreComponent;
