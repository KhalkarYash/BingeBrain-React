const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute w-screen aspect-video pt-80 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="text-black font-semibold rounded-md bg-white p-4 px-12 text-lg bg-opacity-90 hover:bg-opacity-50">
          <i class="fa-solid fa-play"></i> Play
        </button>
        <button className="mx-2 text-white rounded-md bg-gray-500 p-4 px-7 text-lg bg-opacity-30 hover:bg-opacity-50">
          <i class="fa-solid fa-circle-info"></i> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
