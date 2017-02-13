import React from 'react';

import Nav from '../Nav/Nav';
import './App.css';

export default function App({
  children,
}) {
  return (
    <div className="App">
      <header>
        <h1>Solo Inc. Starshipping</h1>
        <Nav />
      </header>
      {children}
    </div>
  );
}