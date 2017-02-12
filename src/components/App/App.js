import React from 'react';

import Search from '../../containers/Search/Search';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Solo Inc. Starshipping</h1>
      </header>
      <h2>Starship Store</h2>
      <Search />
    </div>
  );
}