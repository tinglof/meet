import React, { Component } from 'react';
import './App.css';
import ListContainer from './list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container app-container">

          <h2>ToDo</h2>
          <ListContainer />

        </div>
      </div>
    );
  }
}

export default App;
