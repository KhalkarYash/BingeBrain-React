import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[Math.floor(Math.random() * 20)];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] sm:pt-[20%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground title={original_title} movieId={id} />
    </div>
  );
};

export default MainContainer;
