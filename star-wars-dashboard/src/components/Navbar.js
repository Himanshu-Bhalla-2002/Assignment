import React from 'react';
import './Navbar.css';
import { ReactComponent as StarWarsLogo } from '../assets/star-wars-logo.svg';

function Navbar() {
  return (
    <header className="navbar">
      <StarWarsLogo />
      {}
    </header>
  );
}

export default Navbar;