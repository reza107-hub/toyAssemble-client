import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      delay: 150, // Delay between animations in milliseconds
      offset: 120, // Offset (in pixels) from the element's position before triggering the animation
    });
  }, []);
  return (
    <div className="mt-20 md:w-[80%] mx-auto">
      <p className="text-primary my-10 text-4xl font-bold text-center">
        Our service
      </p>
      <div className="flex md:flex-row flex-col justify-around gap-10 items-center">
        <div
          data-aos="zoom-in"
          className="md:w-full"
        >
          <img
            className=" h-[500px]"
            src="https://i.ibb.co/tB4vrV3/istockphoto-1312940184-612x612.jpg"
            alt=""
          />
        </div>
        <div className="text-neutral text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl font-bold text-accent">
            Unleash Joyful Imaginations with Our Toy Market Services
          </h1>
          <p className="text-gray-400 font-serif">
            Experience the Magic, Embrace the Wonder, and Create Priceless
            Memories That Will Forever Dance in Your Heart.
          </p>
          <ol className="text-gray-400 space-y-1 font-serif">
            <li>Toy Curation</li>
            <li>Playful Wonderland</li>
            <li>Imagination Workshops</li>
            <li>Magical Storytelling Sessions</li>
            <li>Joyful Playdates</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Service;
