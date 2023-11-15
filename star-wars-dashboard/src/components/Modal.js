import React from 'react';
import './Modal.css'; // This will be your CSS file for styling the modal

const Modal = ({ title, imageSrc, content }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button">✕</button>
        </div>
        <div className="modal-image">
          <img src={imageSrc} alt="Modal Visual" />
        </div>
        {content.map((item, index) => (
          <div key={index} className="modal-item">
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
        <button className="modal-close">Close</button>
      </div>
    </div>
  );
};

export default Modal;
