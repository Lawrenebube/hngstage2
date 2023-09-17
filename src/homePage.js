import MoviesCard from './card';
import FooterComponent from './footer';
import Hero from './hero';
import Show from './show';
import './App.css';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const getMovies = () => {
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6d8269dd4a4e30caa9145370b559b349&language=en-US")
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(json => {
          setMovies(json.results);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    };

    getMovies();
  }, []); 

    const firstMovies = movies.slice(0, 10);
    const oneMovie = movies.slice(0, 3)[2];


    return ( 
        <div>
           {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
            <Hero oneMovie={oneMovie} />
            <MoviesCard firstMovies={firstMovies} />
            <FooterComponent/>
        </div>
     );
}
 
export default Home;