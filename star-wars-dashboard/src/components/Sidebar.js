import React from 'react';
import './Sidebar.css';
import { ReactComponent as FolderIcon } from '../assets/folder-icon.svg';
import { ReactComponent as RightIcon } from '../assets/right-icon.svg'; // Add this line

function Sidebar() {
  const categories = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];

  return (
    <aside className="sidebar">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <FolderIcon className="sidebar-icon" />
            <span>{category}</span>
            <RightIcon className="sidebar-right-icon" /> {/* Add this line */}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
