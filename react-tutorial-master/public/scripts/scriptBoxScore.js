
var GameLiveTitle = React.createClass({
  render: function() {
    return (<div className="text-center">Live</div>);
  }
});

var BoxScore = React.createClass({
  render: function() {
    var gameData = this.props.gameData;

    return (<div>
              <TeamBoxScore teamData={gameData.AwayTeam} />
              <TeamBoxScore teamData={gameData.HomeTeam} />
            </div>
           );
  }
});

var TeamBoxScore = React.createClass({
  render: function() {
    var teamData = this.props.teamData;

    return (<div className="col-6">
              <h2>{teamData.Name}</h2>
              <PlayerScoreTable teamData={teamData} />
            </div>);
  }
});

var PlayerScoreTable = React.createClass({
  render: function() {
    var teamData = this.props.teamData;

    var renderedPlayersStats = teamData.PlayerStats.map(function(playerStats) {
      return (<PlayerStats playerStats={playerStats} key={playerStats.PlayerId}/>);
    });

    return (<table>
              <tbody>
                <tr>
                  <th>
                    Nome
                  </th>
                  <th>
                    Pontos
                  </th>
                </tr>
              {renderedPlayersStats}
              </tbody>
            </table>);
  }
});

var PlayerStats = React.createClass({
  render: function () {
    var playerStats = this.props.playerStats;

    return (<tr>
              <td>
                {playerStats.Nome}
              </td>
              <td>
                {playerStats.Score}
              </td>
            </tr>
            );
  }
});

var GameLive = React.createClass({
  render: function() {
    var gameData = new Game();

    return (<div>
                <GameLiveTitle />
                <BoxScore gameData={gameData} />
            </div>);
  }
});

function Game() {
  return {
    HomeTeam: {
      Name: 'São Luís',
      PlayerStats: [{
          Nome: 'Lair',
          PlayerId: 1,
          Score: 32
        },
        {
          Nome: 'Rafa',
          PlayerId: 2,
          Score: 27
        }]
    },
    AwayTeam: {
      Name: 'Cosseno',
      PlayerStats: [{
                Nome: 'Jeferson',
          PlayerId: 1,
                Score: 28
              },
              {
                Nome: 'Adonis',
          PlayerId: 2,
                Score: 12
              }]
    }
  };
}

ReactDOM.render(<GameLive />, document.getElementById('content'));
