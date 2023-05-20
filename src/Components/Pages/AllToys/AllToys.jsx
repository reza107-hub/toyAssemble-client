import { useState, useEffect, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";

const AllToys = () => {
  useTitle('All Toys')
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
  useEffect(() => {
    fetch("category.json")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container my-20 mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        All Toys
      </h1>
      <div className="flex md:justify-end justify-center mb-7">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Toy Name"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-neutral rounded py-2 px-5 text-center text-neutral focus:outline-none focus:border-primary"
          />
          <BsSearch className="absolute top-3 left-3 text-neutral opacity-50" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-accent py-2 px-4 border-b">Seller</th>
              <th className="text-accent py-2 px-4 border-b">Toy Name</th>
              <th className="text-accent py-2 px-4 border-b">Sub-category</th>
              <th className="text-accent py-2 px-4 border-b">Price</th>
              <th className="text-accent py-2 px-4 border-b">
                Available Quantity
              </th>
              <th className="text-accent py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr className="text-center" key={toy.id}>
                <td className="py-2 px-4 text-neutral border-b">
                  {toy.seller}
                </td>
                <td className="py-2 px-4 text-neutral border-b">{toy.name}</td>
                <td className="py-2 px-4 text-neutral border-b">
                  {toy.category}
                </td>
                <td className="py-2 px-4 text-neutral border-b">{toy.price}</td>
                <td className="py-2 px-4 text-neutral border-b">
                  {toy.quantity}
                </td>
                <td className="py-2 px-4 text-neutral border-b">
                  <button
                    onClick={() => userLoggedInOrNot(toy.id)}
                    className="text-secondary font-medium"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
