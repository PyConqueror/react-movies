function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <h1>{movie.title}</h1>
        <p>Release Date: {movie.releaseDate}</p>
        <img src={movie.posterPath} />
        <p>Cast: {movie.cast.join(', ')}</p>
      </div>
    );
  }

export default MovieCard 