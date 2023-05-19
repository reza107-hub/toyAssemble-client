import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Avenger = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const userLoggedInOrNot = (id) => {
    if (user) {
      navigate(`/toy/${id}`);
    } else {
      Swal.fire({
        icon: "error",
        text: "You have to login first",
      });
      navigate(`/toy/${id}`);
    }
  };
  return (
    <div>
      <div className="card md:w-[400px] border border-info py-4 bg-slate-100 text-neutral font-serif">
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
            <button
              onClick={() => userLoggedInOrNot(toy.id)}
              className="btn btn-outline btn-primary normal-case"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avenger;
