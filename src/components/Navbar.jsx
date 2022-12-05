import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navBar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
