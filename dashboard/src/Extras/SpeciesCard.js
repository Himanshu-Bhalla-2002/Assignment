
import React, { useState } from 'react';
import './SpeciesCard.css';
import DropdownMenu from '../components/DropdownMenu';
import Modal from '../components/Modal';
import threeDotsIcon from '../assets/three-dots.svg';

export const SpeciesCard = ({ 
    name,
    classification,
    averageHeight,
    averageLifespan,
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
    <div className="movie-card">
    <div className="movie-image" style={{ backgroundImage: `url(${posterImage})` }}></div>
    <div className="movie-info">
      <h2 className="movie-title">{name}</h2>
      <div className="movie-menu-icon" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      
      {isDropdownOpen && <DropdownMenu show={isDropdownOpen} onOpenModal={openModal} />}
      {isModalOpen && <Modal 
      title={name} 
      imageSrc={posterImage} 
      content={[
        { label: 'Classification', value: classification },
        { label: 'Average Height', value: averageHeight },
        { label: ' Average Lifespan', value: averageLifespan },
      ]}
        onClose={closeModal}
      />}
    </div>
    </div>

  );
};

export default SpeciesCard;
