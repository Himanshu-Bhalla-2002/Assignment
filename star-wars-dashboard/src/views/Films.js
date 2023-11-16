import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';
import './Films.css';
import GridViewIcon from '../assets/GridViewIcon.svg';
import ListViewIcon from '../assets/ListViewIcon.svg';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const updatedFilms = data.results.map(film => {
            return {
              title: film.title,
              releaseDate: film.release_date,
              openingCrawl: film.opening_crawl,
            };
          });
          setFilms(updatedFilms);
        } else {
          console.error('Results not found in the response');
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

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
        <div className="film-list-container">
          {films.map((film, index) => (
            <MovieList 
              key={index}
              title={film.title} 
              releaseDate={film.releaseDate} 
              openingCrawl={film.openingCrawl} 
            />
          ))}
        </div>
      ) : (
        <div className="films-grid">
          {films.map((film, index) => (
            <MovieCard 
              key={index} 
              imgSrc={`https://picsum.photos/seed/${Math.random()}/200/300`} 
              title={film.title} 
              releaseDate={film.releaseDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Films;
