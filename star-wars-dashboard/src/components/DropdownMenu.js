// import React, { useState } from 'react';
// import './DropdownMenu.css'; // Path to your CSS file
// import ViewIcon from '../assets/view.svg';
// import DownloadIcon from '../assets/download.svg';
// import RenameIcon from '../assets/rename.svg';
// import ShareLinkIcon from '../assets/shareLink.svg';
// import MoveIcon from '../assets/move.svg';
// import MarkPrivateIcon from '../assets/markPrivate.svg';
// import DeleteIcon from '../assets/delete.svg';

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="dropdown">
//       <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">
//       </button>
//       {isOpen && (
//         <div className="dropdown-content">
//           <a href="#">
//             <img src={ViewIcon} alt="View" className="icon" /> View
//           </a>
//           <a href="#">
//             <img src={DownloadIcon} alt="Download" className="icon" /> Download
//           </a>
//           <a href="#">
//             <img src={RenameIcon} alt="Rename" className="icon" /> Rename
//           </a>
//           <a href="#">
//             <img src={ShareLinkIcon} alt="Share Link" className="icon" /> Share Link
//           </a>
//           <a href="#">
//             <img src={MoveIcon} alt="Move" className="icon" /> Move
//           </a>
//           <a href="#" className="mark-private">
//             <img src={MarkPrivateIcon} alt="Mark Private" className="icon" /> Mark Private
//           </a>
//           <a href="#" className="delete">
//             <img src={DeleteIcon} alt="Delete" className="icon" /> Delete
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;

// import React, { useState, useRef, useEffect } from 'react';
// import './DropdownMenu.css'; 
// import ViewIcon from '../assets/view.svg';
// import DownloadIcon from '../assets/download.svg';
// import RenameIcon from '../assets/rename.svg';
// import ShareLinkIcon from '../assets/shareLink.svg';
// import MoveIcon from '../assets/move.svg';
// import MarkPrivateIcon from '../assets/markPrivate.svg';
// import DeleteIcon from '../assets/delete.svg';

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Function to close the dropdown if clicked outside
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   // Effect for handling clicks outside the dropdown
//   useEffect(() => {
//     // Bind the event listener
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="dropdown" ref={dropdownRef}>
//       <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">
//         {/* This can be an icon or text */}
//         ...
//       </button>
//       {isOpen && (
//         <div className="dropdown-content">
//           <a href="#">
//             <img src={ViewIcon} alt="View" className="icon" /> View
//           </a>
//           <a href="#">
//             <img src={DownloadIcon} alt="Download" className="icon" /> Download
//           </a>
//           <a href="#">
//             <img src={RenameIcon} alt="Rename" className="icon" /> Rename
//           </a>
//           <a href="#">
//             <img src={ShareLinkIcon} alt="Share Link" className="icon" /> Share Link
//           </a>
//           <a href="#">
//             <img src={MoveIcon} alt="Move" className="icon" /> Move
//           </a>
//           <a href="#" className="mark-private">
//             <img src={MarkPrivateIcon} alt="Mark Private" className="icon" /> Mark Private
//           </a>
//           <a href="#" className="delete">
//             <img src={DeleteIcon} alt="Delete" className="icon" /> Delete
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;


import React from 'react';
import './DropdownMenu.css'; // Make sure you have the appropriate CSS file for styling
import ViewIcon from '../assets/view.svg';
import DownloadIcon from '../assets/download.svg';
import RenameIcon from '../assets/rename.svg';
import ShareLinkIcon from '../assets/shareLink.svg';
import MoveIcon from '../assets/move.svg';
import MarkPrivateIcon from '../assets/markPrivate.svg';
import DeleteIcon from '../assets/delete.svg';

const DropdownMenu = ({ show }) => {
  return (
    <div className={`dropdown ${show ? 'show' : ''}`}>
      <div className="dropdown-content">
        <a href="./">
          <img src={ViewIcon} alt="View" className="icon" /> View
        </a>
        <a href="./">
          <img src={DownloadIcon} alt="Download" className="icon" /> Download
        </a>
        <a href="./">
          <img src={RenameIcon} alt="Rename" className="icon" /> Rename
        </a>
        <a href="./">
          <img src={ShareLinkIcon} alt="Share Link" className="icon" /> Share Link
        </a>
        <a href="./">
          <img src={MoveIcon} alt="Move" className="icon" /> Move
        </a>
        <a href="./" className="mark-private">
          <img src={MarkPrivateIcon} alt="Mark Private" className="icon" /> Mark Private
        </a>
        <a href="./" className="delete">
          <img src={DeleteIcon} alt="Delete" className="icon" /> Delete
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
