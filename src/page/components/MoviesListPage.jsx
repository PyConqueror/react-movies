import MovieCard from "./MovieCard"

function MoviesListPage({ movies }) {
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </>
    ); 
  }

export default MoviesListPage