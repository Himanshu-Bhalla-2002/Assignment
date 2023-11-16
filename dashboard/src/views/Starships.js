import React, { useState, useEffect } from 'react';
import StarshipsCard from '../Extras/StarShipsCard';
import StarshipsList from '../Extras/StarShipsList';
import './People.css';
import GridViewIcon from '../assets/GridViewIcon.svg';
import ListViewIcon from '../assets/ListViewIcon.svg';

const Starships = () => {
  const [people, setPeople] = useState([]);
  const [view, setView] = useState('list');
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const updatedPeople = data.results.map(person => ({
            name: person.name,
            model: person.model,
            hyperdriveRating: person.hyperdrive_rating,
            manufacturer: person.manufacturer,
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
        <h1>Starships</h1>
        <div className="header-icons">
          <img src={GridViewIcon} alt="Grid view" onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''} />
          <img src={ListViewIcon} alt="List view" onClick={() => setView('list')} className={view === 'list' ? 'active' : ''} />
        </div>
      </div>
      {view === 'list' ? (
        <div className="movie-list-container">
          {people.map((person, index) => (
            <StarshipsList
            key={index}
    name={person.name}
    model={person.model}
    hyperdriveRating={person.hyperdriveRating}
    manufacturer={person.manufacturer}
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      ) : (
        <div className="people-grid">
          {people.map((person, index) => (
            <StarshipsCard
            key={index}
    name={person.name}
    model={person.model}
    hyperdriveRating={person.hyperdriveRating}
    manufacturer={person.manufacturer} 
            posterImage={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Starships;
