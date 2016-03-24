import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState(
      {
        red: ReactDom.findDOMNode(this.refs.red).value
      }
    );
  }
  render() {
    return (
      <div>
        {this.state.red}
        <NumInput ref="red" update={this.update} txt={this.state.txt} />
      </div>
    )
  }
}

class NumInput extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
    )
  }
}

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
}

export default App;
