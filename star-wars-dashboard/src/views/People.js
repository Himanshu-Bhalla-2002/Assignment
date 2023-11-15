import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';
import './People.css';
import GridViewIcon from '../assets/GridViewIcon.svg';
import ListViewIcon from '../assets/ListViewIcon.svg';

const People = () => {
  const [people, setPeople] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const updatedPeople = data.results.map(person => {
            return {
              name: person.name,
              birthYear: person.birth_year,
              species: person.species[0] || 'Unknown species', 
            };
          });
          setPeople(updatedPeople);
        } else {
          console.error('Results not found in the response');
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
    <div className="header">
      <h1>Person</h1>
      <div className="header-icons">
        <img src={GridViewIcon} alt="Grid view" onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''} />
        <img src={ListViewIcon} alt="List view" onClick={() => setView('list')} className={view === 'list' ? 'active' : ''} />
      </div>
    </div>
    {view === 'list' ? (
      <div className="movie-list-container">
        {people.map((person, index) => (
          <MovieList 
            name={person.name} 
            birthdate={person.birthYear} 
            species={person.species} 
          />
        ))}
      </div>
    ) : (
      <div className="people-grid">
        {people.map((person, index) => (
          <MovieCard 
            key={index} 
            imgSrc={`https://picsum.photos/seed/${person.name}/200/300`} 
            title={person.name} 
          />
        ))}
      </div>
    )}
  </div>
  );
};

export default People;