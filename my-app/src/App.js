import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Isu', age: 20, belt: 'black', id: 1 },
      { name: 'Imi', age: 20, belt: 'white', id: 2 },
      { name: 'Neva', age: 10, belt: 'green', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    )
  }
}

export default App;
