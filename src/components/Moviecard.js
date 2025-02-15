import { IMG_CDN } from "../utils/constants";

const Moviecard = ({ title, posterPath }) => {
  return (
    <div className="w-32 md:w-48 mr-4 rounded-md overflow-hidden relative group">
      {/* Movie Poster */}
      <div className="overflow-hidden">
        <img
          src={IMG_CDN + posterPath}
          alt="Movie Poster"
        />
      </div>

      <h2 className="font-semibold text-lg mt-1">{title}</h2>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-evenly items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button title="Play" className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
          <i className="fa-solid fa-play text-lg"></i>
        </button>

        <button title="Add to" className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition">
          <i className="fa-solid fa-plus text-lg"></i>
        </button>
        <button title="Info" className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition">
          <i className="fa-solid fa-circle-info text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Moviecard;
