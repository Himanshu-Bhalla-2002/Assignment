import React, { useState, useEffect } from 'react';
import FilmCard from '../Extras/FilmCard';
import FilmList from '../Extras/FilmList';
import './People.css';
import GridViewIcon from '../assets/GridViewIcon.svg';
import ListViewIcon from '../assets/ListViewIcon.svg';

const People = () => {
  const [people, setPeople] = useState([]);
  const [view, setView] = useState('grid');
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const updatedPeople = data.results.map(person => ({
            title: person.title,
            releaseDate: person.release_date,
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
        <h1>Films</h1>
        <div className="header-icons">
          <img src={GridViewIcon} alt="Grid view" onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''} />
          <img src={ListViewIcon} alt="List view" onClick={() => setView('list')} className={view === 'list' ? 'active' : ''} />
        </div>
      </div>
      {view === 'list' ? (
        <div className="movie-list-container">
          {people.map((person, index) => (
            <FilmList 
            key={index} 
            title={person.title} 
            releaseDate={person.releaseDate} 
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      ) : (
        <div className="people-grid">
          {people.map((person, index) => (
            <FilmCard 
            key={index} 
            title={person.title} 
            releaseDate={person.releaseDate} 
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
