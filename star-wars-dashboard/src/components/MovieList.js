// import React from 'react';
// import './MovieList.css'; // Make sure to create and import MovieList.css
// import threeDotsIcon from '../assets/three-dots.svg'; // Import the three-dots icon

// const MovieList = ({ name, birthdate, species }) => {
//   return (
//     <div className="movie-list-item">
//       <div className="movie-list-details">
//         <div className="movie-list-name">{name}</div>
//         <div className="movie-list-birthdate">{birthdate}</div>
//         <div className="movie-list-species">{species}</div>
//       </div>
//       <img src={threeDotsIcon} alt="More options" className="movie-list-menu" />
//     </div>
//   );
// };

// export default MovieList;


import React, { useState } from 'react';
import './MovieList.css';
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu component
import threeDotsIcon from '../assets/three-dots.svg'; // Import the three-dots icon

const MovieList = ({ name, birthdate, species }) => {
  // State to manage the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="movie-list-item">
      <div className="movie-list-details">
        <div className="movie-list-name">{name}</div>
        <div className="movie-list-birthdate">{birthdate}</div>
        <div className="movie-list-species">{species}</div>
      </div>
      <div className="movie-list-menu" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      {isDropdownOpen && <DropdownMenu />}
    </div>
  );
};

export default MovieList;
