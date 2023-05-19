import "./Gallery.css";

const Gallery = () => {
  const toyData = [
    {
      id: 1,
      imgSrc:
        "https://i.ibb.co/xmsrBPP/Ag-AD8-Qk-AAu-G2-OFc-removebg-preview.png",
      toyName: "Playskool Heroes Marvel Super Hero Adventures Ultimate Set",
    },
    {
      id: 2,
      imgSrc:
        "https://i.ibb.co/dKTHvdd/Ag-AD8wk-AAu-G2-OFc-removebg-preview.png",
      toyName:
        "Hedstrom Avengers Bop Combo Inflatable Punching Bags and Gloves",
    },
    {
      id: 3,
      imgSrc:
        "https://i.ibb.co/KhJZkqg/Ag-AD9-Ak-AAu-G2-OFc-2-removebg-preview.png",
      toyName: "Marvel Avengers 10 Piece Bath Toy Value Set",
    },
    {
      id: 4,
      imgSrc:
        "https://i.ibb.co/LQwBhVm/Ag-AD9-Ak-AAu-G2-OFc-removebg-preview.png",
      toyName: "Marvel Avengers 10 Piece Bath Toy Value Set",
    },
    {
      id: 5,
      imgSrc:
        "https://i.ibb.co/7WrFHn5/Ag-AD9-Qk-AAu-G2-OFc-removebg-preview.png",
      toyName:
        "Marvel Avengers Action Figures - Iron Man, Hulk, Black Panther, Captain America, Spider Man, Ant Man, War Machine & Falcon",
    },
    {
      id: 6,
      imgSrc:
        "https://i.ibb.co/YBQN0RD/Ag-AD7gk-AAu-G2-OFc-removebg-preview.png",
      toyName: "Marvel Avengers Titan Hero Series Thor",
    },
    {
      id: 7,
      imgSrc:
        "https://i.ibb.co/GHDmVTp/Ag-AD7-Qk-AAu-G2-OFc-removebg-preview.png",
      toyName: "Heroes of Goo Jit Zu Marvel Mega Mini 6 Pack",
    },
    {
      id: 8,
      imgSrc:
        "https://i.ibb.co/Rv062mb/Ag-AD7wk-AAu-G2-OFc-removebg-preview.png",
      toyName: "Marvel Hasbro Studios’ Thor: Love and Thunder Stormbreaker",
    },
    {
      id: 9,
      imgSrc:
        "https://i.ibb.co/1KNNtyq/Ag-AD8-Ak-AAu-G2-OFc-removebg-preview.png",
      toyName: "Avengers Marvel Endgame Red Infinity Gauntlet",
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-16 gap-12 grid md:grid-cols-3">
      {toyData.map((toy) => (
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
      ))}
    </div>
  );
};

export default Gallery;
