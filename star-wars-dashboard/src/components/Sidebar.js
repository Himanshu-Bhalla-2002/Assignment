// import React from 'react';
// import './Sidebar.css';
// import { ReactComponent as FolderIcon } from '../assets/folder-icon.svg';
// import { ReactComponent as RightIcon } from '../assets/right-icon.svg'; // Add this line

// function Sidebar() {
//   const categories = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];

//   return (
//     <aside className="sidebar">
//       <ul>
//         {categories.map((category) => (
//           <li key={category}>
//             <FolderIcon className="sidebar-icon" />
//             <span>{category}</span>
//             <RightIcon className="sidebar-right-icon" /> {/* Add this line */}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;


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
