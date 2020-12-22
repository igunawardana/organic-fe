import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Products from './components/Products';
import Settings from './components/Settings';
import Market from './components/Market';
class App extends Component {

  state = {}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/products' component={Products} />
          <Route path='/settings' component={Settings} />
          <Route path='/market' component={Market} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;