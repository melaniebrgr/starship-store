import React from 'react';

import Nav from '../Nav/Nav';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function App({
  children,
}) {
  return (
    <div className="container">
      <header className="page-header">
        <h1>Solo Inc. Starshipping</h1>
      </header>
      <Nav />
      {children}
    </div>
  );
}