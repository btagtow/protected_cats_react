import React, { Component } from 'react';

import './App.css';

import Authenticate from './Authenticate';
import CatsContainer from './CatsContainer';

class App extends Component {
  
  state = {
    cats: []
  }

  setCats = (cats) => {
    this.setState({ cats });
  }

  render() {
    const { cats } = this.state;

    return (
      <div className="App">
        <h1>Cats!</h1>
        <Authenticate setCats={this.setCats} />
        <CatsContainer cats={cats} />
      </div>
    );
  }
}

export default App;
