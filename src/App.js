import React, { Component } from 'react';
import './App.css';
import ListContainer from './list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>ToDo</h2>

        </div>
        <h3> Mötespunkter </h3>
        <ListContainer />
      </div>
    );
  }
}

export default App;
