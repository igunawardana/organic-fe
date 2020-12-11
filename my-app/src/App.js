import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Isu', age: 20, belt: 'black', id: 1 },
      { name: 'Imi', age: 20, belt: 'white', id: 2 },
      { name: 'Neva', age: 10, belt: 'green', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;
