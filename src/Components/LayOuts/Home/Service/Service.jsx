const Service = () => {
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <p className="text-primary my-10 text-4xl font-bold text-center">
        Our service
      </p>
      <div className="flex justify-around gap-10 items-center">
        <div className="md:w-full">
          <img
            className=" h-[500px]"
            src="https://i.ibb.co/jzNJG1C/image.png"
            alt=""
          />
        </div>
        <div className="text-neutral space-y-6 md:w-1/2">
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
