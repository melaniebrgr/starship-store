import React, { Component } from 'react';

import Store from '../../containers/Store/Store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Solo Inc. Starshipping</h1>
        </header>
        <h2>Starship Store</h2>
        <Store />
      </div>
    );
  }
}

export default App;
