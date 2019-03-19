import React, { Component } from 'react';
import './App.css';
import FuncComp from './components/FuncComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FuncComp />
        </header>
      </div>
    );
  }
}

export default App;
