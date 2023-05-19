import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Avenger = ({ toy }) => {
  return (
    <div>
      <div className="card md:w-[275px] border border-info py-4 bg-slate-100 text-neutral font-serif">
        <figure className="px-10 pt-10">
          <img src={toy.image} alt="" className="rounded-xl h-48 w-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font text-accent">{toy.name}</h2>
          <p className="font text-secondary">Price: ${toy.price}</p>
          <p className="font text-secondary flex items-center">
            Rating:{" "}
            <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary normal-case">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avenger;
