import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gptSuggestions = useSelector((store) => store.gpt.showGptSuggestions);
  const finalList = gptSuggestions.map((movie) => movie[0]);

  return (
    <div className="bg-black overflow-x-scroll w-screen bg-opacity-15 rounded-lg text-white h-[100%] py-4 my-4 mx-auto">
      <div className="mx-auto">
        <MovieList title="AI Suggestions" movies={finalList} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
