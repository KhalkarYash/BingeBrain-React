const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute w-screen aspect-video pt-[30%] md:pt-80 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden 2xl:block py-6 text-lg w-1/2">{overview}</p>
      <div className="mt-4 2xl:mt-0 md:text-lg">
        <button className="text-black font-semibold rounded-md bg-white py-2 2xl:py-4 px-8 2xl:px-12 bg-opacity-90 hover:bg-opacity-50">
          <i class="fa-solid fa-play"></i> Play
        </button>
        <button className="hidden md:inline-block mx-2 text-white rounded-md bg-gray-500 py-2 2xl:py-4 px-5 2xl:px-7 bg-opacity-30 hover:bg-opacity-50">
          <i class="fa-solid fa-circle-info"></i> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
