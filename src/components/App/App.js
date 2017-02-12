import React from 'react';

import './App.css';

export default function App({
  children,
}) {
  return (
    <div className="App">
      <header>
        <h1>Solo Inc. Starshipping</h1>
      </header>
      {children}
    </div>
  );
}