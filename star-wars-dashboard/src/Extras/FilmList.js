import React, { useState } from 'react';
import './FilmList.css';
import DropdownMenu from '../components/DropdownMenu';
import Modal from '../components/Modal'; 
import threeDotsIcon from '../assets/three-dots.svg';

const FilmList = ({ title,releaseDate,posterImage}) => {
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
        <div className="movie-list-name">{title}</div>
        <div className="movie-list-birthdate"></div>
        <div className="movie-list-species">{releaseDate}</div>
      </div>
      <div className="movie-list-menu" onClick={toggleDropdown}>
        <img src={threeDotsIcon} alt="More options" />
      </div>
      {isDropdownOpen && <DropdownMenu show={isDropdownOpen} onOpenModal={openModal} />}
      {isModalOpen && <Modal 
        title={title} 
        imageSrc={posterImage} 
        content={[
          { label: 'Release Date', value: releaseDate },
          
        ]}
        onClose={closeModal}
      />}
    </div>
  );
};

export default FilmList;
