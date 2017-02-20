import React, { Component } from 'react';
import Count from './Count/Count.jsx';
import Citation from './Citation/Citation.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Count />
        <Citation />
      </div>
    );
  }
}

export default App;
