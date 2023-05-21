import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa";
const FantasticFour = ({ toy }) => {
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
    <div className="border bg-slate-100 border-secondary rounded-lg p-4">
      <div className="flex justify-center">
        <img
          className="h-64 rounded-lg mb-4"
          src={toy.image}
          alt="Card Image"
        />
      </div>
      <h2 className="text-xl font-bold mb-2 text-accent">{toy.name}</h2>
      <p className="mb-4 text-secondary">Price: ${toy.price}</p>
      <div className="text-secondary mb-4 flex gap-2">
        Rating: <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => userLoggedInOrNot(toy._id)}
          className="btn btn-primary btn-outline normal-case"
        >
          <FaArrowRight className="text-xl w-11" />
        </button>
      </div>
    </div>
  );
};

export default FantasticFour;
