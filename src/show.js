import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Show = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const formatReleaseDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };


  const { id } = useParams();

  useEffect(() => {
    const movieId = localStorage.getItem('movieId');

    const getMoviesDetails = () => {
      if (movieId) {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6d8269dd4a4e30caa9145370b559b349`)
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(json => {
            setDetails([json]);
            console.log('Details State:', details);
            setLoading(false);
          })

          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }
    };

    getMoviesDetails();
  }, [id]);


  console.log(details);

  return (
    <div className='showDetails'>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <nav className='menu'>
        <p className='logo'>
          <img src={require('./assets/Logod.svg').default} alt='' />
        </p>
        <a href=''>
          <img src={require('./assets/Home.svg').default} alt='' />
          <span>Home</span>
        </a>
        <a href=''>
          <img src={require('./assets/Movie Projector.svg').default} alt='' />
          <span>Movies</span>
        </a>
        <a href=''>
          <img src={require('./assets/TV Show.svg').default} alt='' />
          <span>TV Series</span>
        </a>
        <a href=''>
          <img src={require('./assets/Calendar.svg').default} alt='' />
          <span>Upcoming</span>
        </a>
        <div className='pinkBox'>
          <h3>
            Play movie quizes and earn free tickets
          </h3>
          <p>
            50k people are playing now
          </p>
          <button>Start playing</button>
        </div>
        <a href=''>
          <img src={require('./assets/Logout.svg').default} alt='' />
          <span>Log out</span>
        </a>

      </nav>
      {details && details.length > 0 && details.map(movie => (
        <div className='details' key={movie.id}>
          <div>
            <img className='detailsImg' src={baseUrl + movie.backdrop_path} data-testid="movie-poster" alt='movie-poster' />
            <img className='playbutton' src={require('./assets/Play.svg').default} />
            <p className='watch'>WATCH TRAILER</p>
          </div>
          <div className='long '>
            <p className=''>
              <span className="name" data-testid="movie-title"> {movie.title} •</span>
              <span data-testid="movie-release-date">{formatReleaseDate(movie.release_date)}</span>
              <span data-testid="movie-runtime">  {movie.runtime} mins</span>
              <span className='colored'> Action</span>
              <span className='colored'> Drama</span>
            </p>
            <div>
              <span>
                <img className='star' src={require('./assets/Star.svg').default} />
              </span>
              <span> {movie.vote_average}/350k</span>
            </div>
          </div>
          <div className='grid'>
            <div className='secondGrid'>
              <p className='detailsOverview' data-testid="movie-overview"> {movie.overview} </p>
              <img className='name' src={require('./assets/Director _ Joseph Kosinski.svg').default} />
              <img className='name' src={require('./assets/Writers _ Jim Cash, Jack Epps Jr, Peter Craig.svg').default} />
              <img className='name' src={require('./assets/Stars _ Tom Cruise, Jennifer Connelly, Miles Teller.svg').default} />
              <div className='top'>
                <button className='topbutton'>Top rated movie #65</button>
                <span>Awards 9 nominations</span>
                <div>
                <img className='expand' src={require('./assets/Expand Arrow.svg').default} />
                </div>
              </div>
            </div>
            <div className='secondGrid'>
              <button className='seebutton'>
                <img className='' src={require('./assets/Two Tickets.svg').default} />
                <span>See Showtimes</span>
              </button>
              <button className='morebutton'>
                <img className='' src={require('./assets/List.svg').default} />
                <span>More watch options</span>
              </button>
              <img className='rectangle' src={require('./assets/Rectangle 37.svg').default} />
            </div>
          </div>
        </div>
          
      ))}
    </div>
  );
}

export default Show;