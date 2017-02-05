import React, { Component } from 'react';

import Store from '../../containers/Store/Store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Solo Inc. Starshipping</h2>
        </header>
        <Store />
      </div>
    );
  }
}

export default App;
