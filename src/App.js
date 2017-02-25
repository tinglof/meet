import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <h3> Mötespunkter </h3>
        <ListContainer />
      </div>
    );
  }
}

export default App;
