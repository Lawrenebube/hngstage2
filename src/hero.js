const Hero = ({oneMovie}) => {
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



    return (
      <div className="">
        <div className='heroPage'>
          {oneMovie && (
            <div className="hero" key={oneMovie.id} data-testid="movie-card">
              <div>
                <img className='heroImg' src={baseUrl + oneMovie.backdrop_path} data-testid="movie-poster" alt='movie-poster' />
              </div>
              <nav>
                <div>
                  <img src={require ('./assets/Logo.svg').default} />
                </div>
                <div className='searchBar'>
                <input type="text" id="search" placeholder='What do you want to watch'/>
                <div>
                  <img src={require ('./assets/Search.svg').default} />
                </div>
                </div>
                <div className='signing'>
                <a href=''>Sign in</a>
                <img src={require ('./assets/Menu.svg').default} />
                </div>
              </nav>
              <h2 data-testid="movie-title" className='herotitle'>{oneMovie.title}</h2>
              <p className='heroOverview'>{oneMovie.overview}</p>
              <p data-testid="movie-release-date">{formatReleaseDate(oneMovie.release_date)}</p>
              <button className='watchButton'>
                <img src={require ('./assets/Play.svg').default} />
                <span>WATCH TRAILER</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
}
 
export default Hero;