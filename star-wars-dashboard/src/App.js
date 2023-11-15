import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import MovieCard from './components/MovieCard';

// Import other component views you will create for each route
import Films from './views/Films';
import People from './views/People';
import Planets from './views/Planets';
import Species from './views/Species';
import Starships from './views/Starships';
import Vehicles from './views/Vehicles';

import './App.css';
import MovieList from './components/MovieList';
import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/test" element={<MovieCard imgSrc="https://picsum.photos/seed/picsum/200/300" title="abc" />} />
            <Route path="/test1" element={<MovieList name={"abc"}  birthdate={"1234"}  species={"1234"}/>} />
            <Route path="/test2" element={<DropdownMenu/>} />

            <Route path="/films" element={<Films />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/species" element={<Species />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/vehicles" element={<Vehicles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
