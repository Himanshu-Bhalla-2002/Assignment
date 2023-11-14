import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Welcome />
      </div>
    </div>
  );
}

export default App;