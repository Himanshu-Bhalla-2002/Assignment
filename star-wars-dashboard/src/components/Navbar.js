import React from 'react';
import './Navbar.css';
import { ReactComponent as StarWarsLogo } from '../assets/star-wars-logo.svg'; // Make sure this path is correct

function Navbar() {
  return (
    <header className="navbar">
      <StarWarsLogo />
      {/* Other navbar content here */}
    </header>
  );
}

export default Navbar;