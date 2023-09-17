import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const MoviesCard = ({firstMovies}) => {

  const [addClass, setAddClass] = useState(false);
  const [movieId, setMovieId] = useState(localStorage.getItem('movieId') || null);
  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  const toggleIconColor = () => {
    setAddClass(!addClass);
  };
  
  const handleMovieClick = (clickedMovieId) => {
    localStorage.setItem('movieId', clickedMovieId);
    setMovieId(clickedMovieId);
  };


  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className="movieGrid">
      <div className='movieGridHeader'>
        <h2>Featured Movie</h2>
        <a href='#'>See More &gt; </a>
      </div>
      <div className='movies' data-testid=" movie-card">
        {firstMovies.map(movie => (
          <div className="movieCard" key={movie.id} data-testid=" movie-card" >
            <div>
            <Link to={`/movies/${movie.id}`} key={movie.id}  >
              <img className='cardImg' src={baseUrl + movie.poster_path} data-testid="movie-poster" onClick={() => handleMovieClick(movie.id)}  />
            </Link>
              <img className={addClass ? 'my-class' : ''} src={require ('./assets/Favorite.svg').default} id='fave'onClick={toggleIconColor} />

            </div>
            <p data-testid="movie-release-date">{formatReleaseDate(movie.release_date)}</p>
            <h2 data-testid = "movie-title" className='movieTitle'>{movie.title}</h2>
            <div className='images'>
              <div className='unwanted'>
                <img src={require ('./assets/imdb.svg').default} />
                <span>73/100</span>
              </div>
              <div className='unwanted'>
              <img src={require ('./assets/tomato.svg').default} /><span>87%</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      );
}

      export default MoviesCard;
