

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { ReactComponent as FolderIcon } from '../assets/folder-icon.svg';
import { ReactComponent as RightIcon } from '../assets/right-icon.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <FolderIcon className="sidebar-icon" />
          <NavLink to="/films">Films</NavLink>
          <RightIcon className="sidebar-right-icon" />
        </li>
        <li>
          <FolderIcon className="sidebar-icon" />
          <NavLink to="/people">People</NavLink>
          <RightIcon className="sidebar-right-icon" />
        </li>
        <li>
          <FolderIcon className="sidebar-icon" />
          <NavLink to="/planets">Planets</NavLink>
          <RightIcon className="sidebar-right-icon" />
        </li>
        <li>
          <FolderIcon className="sidebar-icon" />
          <NavLink to="/species">Species</NavLink>
          <RightIcon className="sidebar-right-icon" />
        </li>
        <li>
          <FolderIcon className="sidebar-icon" />
          <NavLink to="/starships">Starships</NavLink>
          <RightIcon className="sidebar-right-icon" />
        </li>
        <li>
          <FolderIcon className="sidebar-icon" />
          <NavLink to="/vehicles">Vehicles</NavLink>
          <RightIcon className="sidebar-right-icon" />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
