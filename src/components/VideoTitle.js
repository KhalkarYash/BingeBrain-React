const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="w-1/5 flex justify-between">
        <button className="text-black rounded-md bg-white p-4 px-12 text-lg bg-opacity-50 hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 text-white rounded-md bg-gray-300 p-4 px-7 text-lg bg-opacity-80 hover:bg-opacity-90">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
