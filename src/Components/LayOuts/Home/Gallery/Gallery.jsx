import { useEffect } from "react";
import "./Gallery.css";
import SingleCard from "./SingleCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      delay: 200, // Delay between animations in milliseconds
      offset: 120, // Offset (in pixels) from the element's position before triggering the animation
    });
  }, []);
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
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="w-[80%] mx-auto mt-16 gap-12 grid md:grid-cols-3"
    >
      {toyData.map((toy) => (
        <SingleCard key={toy.id} toy={toy}></SingleCard>
      ))}
    </div>
  );
};

export default Gallery;
