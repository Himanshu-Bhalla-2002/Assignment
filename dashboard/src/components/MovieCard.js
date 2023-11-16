
import React, { useState } from 'react';
import './MovieCard.css';
import DropdownMenu from './DropdownMenu';
import Modal from './Modal';
import threeDotsIcon from '../assets/three-dots.svg';

export const MovieCard = ({ imgSrc, title, person }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="movie-card">
    <div className="movie-image" style={{ backgroundImage: `url(${imgSrc})` }}></div>
    <div className="movie-info">
      <h2 className="movie-title">{title}</h2>
      <div className="movie-menu-icon" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      
      {isDropdownOpen && <DropdownMenu show={isDropdownOpen} onOpenModal={openModal} />}
      {isModalOpen && <Modal title={title} imageSrc={imgSrc} content={[
          { label: 'BirthDate', value: person.birthYear },
          { label: 'Species', value: person.species },
        ]}
        onClose={closeModal}
      />}
    </div>
    </div>

  );
};

export default MovieCard;
