import React from 'react';
import './Welcome.css';
import backgroundImage from '../assets/background.jpg'; // Make sure this path is correct

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-box">
        <img src={backgroundImage} alt="Star Wars" />
        <h1>Welcome to Star Wars Dashboard</h1>
        <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
      </div>
    </div>
  );
}

export default Welcome;
