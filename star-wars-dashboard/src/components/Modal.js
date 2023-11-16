import React from 'react';
import './Modal.css';

const Modal = ({ title, imageSrc, content, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>✕</button>
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
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
