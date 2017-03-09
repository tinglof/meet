import React, { Component } from 'react';
import './App.css';
import ListContainer from './list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container app-container">
            <h2>Todo List</h2>
            <p className="ingress">Add items, get them done, check them off.</p>
          <ListContainer />

        </div>
      </div>
    );
  }
}

export default App;
