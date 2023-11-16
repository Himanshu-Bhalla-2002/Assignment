import React, { useState } from 'react';
import './MovieList.css';
import DropdownMenu from './DropdownMenu';
import Modal from './Modal'; 
import threeDotsIcon from '../assets/three-dots.svg';

const MovieList = ({ name, birthdate, species, imageSrc }) => {
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
    <div className="movie-list-item">
      <div className="movie-list-details">
        <div className="movie-list-name">{name}</div>
        <div className="movie-list-birthdate">{birthdate}</div>
        <div className="movie-list-species">{species}</div>
      </div>
      <div className="movie-list-menu" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      {isDropdownOpen && <DropdownMenu show={isDropdownOpen} onOpenModal={openModal} />}
      {isModalOpen && <Modal 
        title={name} 
        imageSrc={imageSrc} 
        content={[
          { label: 'Birthdate', value: birthdate },
          { label: 'Species', value: species },
        ]}
        onClose={closeModal}
      />}
    </div>
  );
};

export default MovieList;
