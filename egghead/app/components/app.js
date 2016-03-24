import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [
        {id: 1, name: 'Lair Júnior'},
        {id: 2, name: 'Bruna Travi'}
      ]
    }
  }
  render(){
    let rows = this.state.data.map(p => {
      return <PersonRow key={p.id} data={p} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>)
  }
}

const PersonRow = (props) => {
    return <tr><td>{props.data.id}</td><td>{props.data.name}</td></tr>
}

export default App
