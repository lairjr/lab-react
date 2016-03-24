import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState(
      {
        red: ReactDom.findDOMNode(this.refs.red).value,
        green: ReactDom.findDOMNode(this.refs.green).value,
        blue: ReactDom.findDOMNode(this.refs.blue).value,
      }
    );
  }
  render() {
    return (
      <div>
        {this.state.red}
        <Slider ref="red" update={this.update} txt={this.state.txt} />
        {this.state.green}
        <Slider ref="green" update={this.update} txt={this.state.txt} />
        {this.state.blue}
        <Slider ref="blue" update={this.update} txt={this.state.txt} />
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
    )
  }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text" onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   )
// }

export default App;
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: 'Hello World'
// }
