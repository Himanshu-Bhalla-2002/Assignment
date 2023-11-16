import React, { useState, useEffect } from 'react';
import SpeciesCard from '../Extras/SpeciesCard';
import SpeciesList from '../Extras/SpeciesList';
import './People.css';
import GridViewIcon from '../assets/GridViewIcon.svg';
import ListViewIcon from '../assets/ListViewIcon.svg';

const People = () => {
  const [people, setPeople] = useState([]);
  const [view, setView] = useState('list');
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://swapi.dev/api/species')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const updatedPeople = data.results.map(person => ({
            name: person.name,
            classification: person.classification,
            averageHeight: person.average_height,
            averageLifespan: person.average_lifespan,
            posterImage:`https://picsum.photos/seed/${Math.random()}/200/300}`
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
        <h1>Species</h1>
        <div className="header-icons">
          <img src={GridViewIcon} alt="Grid view" onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''} />
          <img src={ListViewIcon} alt="List view" onClick={() => setView('list')} className={view === 'list' ? 'active' : ''} />
        </div>
      </div>
      {view === 'list' ? (
        <div className="movie-list-container">
          {people.map((person, index) => (
            <SpeciesList 
            key={index}
            name={person.name}
            classification={person.classification}
            averageHeight={person.averageHeight}
            averageLifespan={person.averageLifespan}
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      ) : (
        <div className="people-grid">
          {people.map((person, index) => (
            <SpeciesCard 
            key={index}
            name={person.name}
            classification={person.classification}
            averageHeight={person.averageHeight}
            averageLifespan={person.averageLifespan}
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
