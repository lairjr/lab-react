'use strict';

import React from 'react';
import { Button } from 'canon-react';

require('styles/gamelive/BoxScorePlayer.sass');

class BoxScorePlayerComponent extends React.Component {
  constructor(props){
    super();
    this.state = props.playerData;
    this.increaseScore = this.increaseScore.bind(this);
  }
  increaseScore() {
    this.setState({ score : this.state.score + 1 });
  }
  render() {
    return (
      <tr>
        <td>
          {this.state.number}
        </td>
        <td>
          {this.state.name}
        </td>
        <td>
          {this.state.score}
          <Button onClick={this.increaseScore}>Add</Button>
        </td>
      </tr>
    );
  }
}

BoxScorePlayerComponent.displayName = 'GameliveBoxScorePlayerComponent';

// Uncomment properties you need
// BoxScorePlayerComponent.propTypes = {};
// BoxScorePlayerComponent.defaultProps = {};

export default BoxScorePlayerComponent;
