import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToy = () => {
  useTitle("MY Toys");
  const [toys, setToys] = useState([]);
  const [sortBy, setSortBy] = useState("ascending");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://toy-market-server-fawn.vercel.app/toysQuery?email=${user?.email}&sortBy=${sortBy}`
    )
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [sortBy, user?.email]);

  const handleDelete = (id) => {
    fetch(`https://toy-market-server-fawn.vercel.app/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount) {
          Swal.fire({
            icon: "success",
            text: "Toy deleted Successfully",
          });
        }
        const remaining = toys.filter((toy) => toy._id !== id);
        setToys(remaining);
      });
  };

  return (
    <div className="container my-20 mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        My Toys
      </h1>
      <div className="flex justify-end mb-4">
        <label htmlFor="sortBy" className="mr-2 text-secondary">
          Sort By:
        </label>
        <select
          id="sortBy"
          className="px-2 py-1 border border-secondary rounded text-neutral"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-accent py-2 px-4 border-b"></th>
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
            {toys.map((toy) => (
              <tr className="text-center" key={toy._id}>
                <td className="py-2 px-4 text-neutral border-b">
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="text-secondary font-medium"
                  >
                    <MdOutlineRemoveCircle />
                  </button>
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
                  <Link to={`/toys/${toy._id}`}>
                    <button className="text-accent font-medium">update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
