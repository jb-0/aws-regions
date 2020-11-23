import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href=""><h3>Map View</h3></a>
      <div className="title">
        <h1>AWS Region IPs</h1>
      </div>
      <a href=""><h3>List View</h3></a>
    </div>
  );
}

export default Navbar;
