import { IMG_CDN } from "../utils/constants";

const Moviecard = ({ title, posterPath }) => {
  return (
    <div className="w-48 mr-4 rounded-md overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={IMG_CDN + posterPath}
          alt="Movie Poster"
          className="hover:scale-105 duration-500 ease-in-out"
        />
      </div>
      <h2 className="font-semibold text-lg">{title}</h2>
    </div>
  );
};

export default Moviecard;
