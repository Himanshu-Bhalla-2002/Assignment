import React from 'react';
import './DropdownMenu.css';
import ViewIcon from '../assets/view.svg';
import DownloadIcon from '../assets/download.svg';
import RenameIcon from '../assets/rename.svg';
import ShareLinkIcon from '../assets/shareLink.svg';
import MoveIcon from '../assets/move.svg';
import MarkPrivateIcon from '../assets/markPrivate.svg';
import DeleteIcon from '../assets/delete.svg';

const DropdownMenu = ({ show, onOpenModal }) => {
  return (
    <div className={`dropdown ${show ? 'show' : ''}`}>
      <div className="dropdown-content">
        <button onClick={onOpenModal} className="dropdown-link">
          <img src={ViewIcon} alt="View" className="icon" /> View
        </button>
        <button className="dropdown-link">
          <img src={DownloadIcon} alt="Download" className="icon" /> Download
        </button>
        <button className="dropdown-link">
          <img src={RenameIcon} alt="Rename" className="icon" /> Rename
        </button>
        <button className="dropdown-link">
          <img src={ShareLinkIcon} alt="Share Link" className="icon" /> Share Link
        </button>
        <button className="dropdown-link">
          <img src={MoveIcon} alt="Move" className="icon" /> Move
        </button>
        <button className="dropdown-link mark-private">
          <img src={MarkPrivateIcon} alt="Mark Private" className="icon" /> Mark Private
        </button>
        <button className="dropdown-link delete">
          <img src={DeleteIcon} alt="Delete" className="icon" /> Delete
        </button>
      </div>
    </div>
  );
};


export default DropdownMenu;
