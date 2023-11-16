import React, { useState, useEffect } from 'react';
import PlanetsCard from '../Extras/PlanetsCard';
import PlanetsList from '../Extras/PlanetsList';
import './People.css';
import GridViewIcon from '../assets/GridViewIcon.svg';
import ListViewIcon from '../assets/ListViewIcon.svg';

const People = () => {
  const [people, setPeople] = useState([]);
  const [view, setView] = useState('list');
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const updatedPeople = data.results.map(person => ({
            name: person.name,
            climate: person.climate,
            gravity: person.gravity,
            terrain: person.terrain,
            surfaceWater: person.surface_water
          }));
          setPeople(updatedPeople);
        } else {
          console.error('Results not found in the response');
        }
      })
      .catch(error => console.error('Fetch error:', error))
      .finally(() => setLoading(false)); 
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  

  return (
    <div>
      <div className="header">
        <h1>Planets</h1>
        <div className="header-icons">
          <img src={GridViewIcon} alt="Grid view" onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''} />
          <img src={ListViewIcon} alt="List view" onClick={() => setView('list')} className={view === 'list' ? 'active' : ''} />
        </div>
      </div>
      {view === 'list' ? (
        <div className="movie-list-container">
          {people.map((person, index) => (
            <PlanetsList 
            key={index}
            name={person.name}
            climate={person.climate}
            gravity={person.gravity}
            terrain={person.terrain}
            surfaceWater={person.surface_water}
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      ) : (
        <div className="people-grid">
          {people.map((person, index) => (
            <PlanetsCard 
            key={index}
            name={person.name}
            climate={person.climate}
            gravity={person.gravity}
            terrain={person.terrain}
            surfaceWater={person.surface_water}
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
