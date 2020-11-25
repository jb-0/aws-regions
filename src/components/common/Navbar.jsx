import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to='/aws-regions/map'><button>Map</button></Link>

      <div className="title">
        <h1>AWS Region IP Finder</h1>
      </div>

      <Link to='/aws-regions/list'><button>List</button></Link>
    </div>
  );
}

export default Navbar;