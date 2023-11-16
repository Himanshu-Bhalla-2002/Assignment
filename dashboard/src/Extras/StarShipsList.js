import React, { useState } from 'react';
import './StarshipsList.css';
import DropdownMenu from '../components/DropdownMenu';
import Modal from '../components/Modal'; 
import threeDotsIcon from '../assets/three-dots.svg';

const StarShipsList = ({  
    name,
    model,
    hyperdriveRating,
    manufacturer,
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
        <div className="movie-list-birthdate">{model}</div>
        <div className="movie-list-species">{hyperdriveRating}</div>
      </div>
      <div className="movie-list-menu" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      {isDropdownOpen && <DropdownMenu show={isDropdownOpen} onOpenModal={openModal} />}
      {isModalOpen && <Modal 
        title={name} 
        imageSrc={posterImage} 
        content={[
        { label: 'Model', value: model },
        { label: 'Hyper Drive Rating', value: hyperdriveRating },
        { label: 'Manufacturer', value: manufacturer },
        ]}
        onClose={closeModal}
      />}
    </div>
  );
};

export default StarShipsList;
