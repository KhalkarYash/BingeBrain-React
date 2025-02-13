import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
        <div className="fixed w-screen scroll -z-10">
        <img
          className="h-screen sm:h-auto bg-no-repeat bg-cover bg-center"
          alt="NetflixUI"
          src={BG_URL}
        ></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
