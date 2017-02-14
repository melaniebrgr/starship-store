import React from 'react';
import { Link } from 'react-router';

export default function Nav() {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}