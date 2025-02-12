import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-4xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll-container">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
