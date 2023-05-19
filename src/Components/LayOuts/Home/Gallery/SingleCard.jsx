const SingleCard = ({ toy }) => {
  return (
    <>
      <div className="relative group rounded-lg">
        <img src={toy.imgSrc} className="border border-info" />
        <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          <div className="bg-gray-900 bg-opacity-30 p-4">
            <h2 className="text-white">{toy.toyName}</h2>
            <p className="text-gray-300"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
