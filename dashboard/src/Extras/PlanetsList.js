import React, { useState } from 'react';
import './PlanetsList.css';
import DropdownMenu from '../components/DropdownMenu';
import Modal from '../components/Modal'; 
import threeDotsIcon from '../assets/three-dots.svg';

const PlanetsList = ({  name,
    climate,
    gravity,
    terrain,
    surfaceWater,
    posterImage}) => {
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
        <div className="movie-list-birthdate">{gravity}</div>
        <div className="movie-list-species">{climate}</div>
      </div>
      <div className="movie-list-menu" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      {isDropdownOpen && <DropdownMenu show={isDropdownOpen} onOpenModal={openModal} />}
      {isModalOpen && <Modal 
        title={name} 
        imageSrc={posterImage} 
        content={[
            { label: 'climate', value: climate },
            { label: 'gravity', value: gravity },
            { label: 'surface water', value: surfaceWater },
          
        ]}
        onClose={closeModal}
      />}
    </div>
  );
};

export default PlanetsList;
