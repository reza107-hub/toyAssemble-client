import { useState, useEffect, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPages, setItemPages] = useState(20);

  const options = [10, 15, 20, 30];
  const handleItemsPerPageChange = (event) => {
    const value = parseInt(event.target.value);
    setItemPages(value);
    setCurrentPage(0);
  };
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / itemPages);
  const pageNumbers = [...Array(totalPages).keys()];

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://toy-market-server-fawn.vercel.app/toysForLimit?limit=${itemPages}&page=${currentPage}`
        );
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.error("Error fetching toys:", error);
      }
    };

    fetchData();
  }, [itemPages, currentPage]);

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
              <th className="text-accent py-2 px-4 border-b">Sl no.</th>
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
            {filteredToys.map((toy, index) => (
              <tr className="text-center" key={toy._id}>
                <td className="py-2 px-4 text-neutral border-b">{index + 1}</td>
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
                    onClick={() => userLoggedInOrNot(toy._id)}
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
      <p className="text-center text-neutral mt-5">
        current page: {currentPage + 1}
      </p>
      <div className="mt-5 text-center text-neutral flex justify-center">
        {pageNumbers.map((number) => (
          <button
            onClick={() => handlePaginationClick(number)}
            className={`${
              currentPage === number ? "btn-active" : ""
            } ml-4 btn btn-primary btn-outline`}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <div className="ml-5">
          <select value={itemPages} onChange={handleItemsPerPageChange}>
            {options.map((option) => (
              <option className="text-neutral" key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
