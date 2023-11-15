// import React from 'react';
// import './MovieCard.css';
// import threeDotsIcon from '../assets/three-dots.svg'; 

// export const MovieCard = ({ imgSrc, title }) => {
//   return (
//     <div className="movie-card">
//       <div className="movie-image" style={{ backgroundImage: `url(${imgSrc})` }}></div>
//       <div className="movie-info">
//         <h2 className="movie-title">{title}</h2>
//         <img src={threeDotsIcon} alt="More options" className="movie-menu-icon" />
//       </div>
//     </div>
//   );
// };

// export default MovieCard;


import React, { useState } from 'react';
import './MovieCard.css';
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu component
import threeDotsIcon from '../assets/three-dots.svg'; // Import the three-dots icon


export const MovieCard = ({ imgSrc, title }) => {
  // State to manage the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="movie-card">
      <div className="movie-image" style={{ backgroundImage: `url(${imgSrc})` }}></div>
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-menu-icon" onClick={toggleDropdown}>
          <img src={threeDotsIcon} alt="More options" />
        </div>
        {isDropdownOpen && <DropdownMenu />}
      </div>
    </div>
  );
};

export default MovieCard;
