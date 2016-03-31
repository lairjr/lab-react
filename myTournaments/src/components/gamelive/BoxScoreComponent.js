'use strict';

import React from 'react';
import BoxScorePlayerComponent from './BoxScorePlayerComponent';

require('styles/gamelive/Boxscore.sass');

class BoxScoreComponent extends React.Component {
  constructor(){
    super();
    this.state = { players: [{ number: 10, name: 'Lair', score: 0 }, { number: 7, name: 'Rafa', score: 0 }] };
  }
  render() {
    let playerRows = this.state.players.map(player => {
      return <BoxScorePlayerComponent playerData={player} key={player.number} />
    });

    return (
      <div className="boxscore-component">
        <table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Nome
              </th>
              <th>
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {playerRows}
          </tbody>
        </table>
      </div>
    );
  }
}

BoxScoreComponent.displayName = 'GameliveBoxScoreComponent';

// Uncomment properties you need
// BoxscoreComponent.propTypes = {};
// BoxscoreComponent.defaultProps = {};

export default BoxScoreComponent;
