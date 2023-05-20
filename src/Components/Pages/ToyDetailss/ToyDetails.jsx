import { useParams, useLoaderData } from "react-router-dom";
import useTitle from "../../../useTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ToyDetails = () => {
  useTitle("Toy Details");
  const { id } = useParams();
  const toys = useLoaderData();
  const toy = toys.find((item) => item._id == id);

  const {
    image,
    name,
    seller,
    seller_email,
    price,
    rating,
    quantity,
    description,
  } = toy;

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row gap-7 items-center md:justify-around">
        <img
          src={image}
          alt={name}
          className="w-64 h-64 md:h-[500px] md:w-[50%] mb-4"
        />

        <div className="md:w-[1200px]">
          <h2 className="text-3xl font-bold text-primary mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold ">Seller:</span> {seller}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Seller Email:</span> {seller_email}
          </p>
          <p className="text-lg mb-2 text-secondary">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <div className="text-lg mb-2 text-secondary flex items-center">
            <span className="font-bold">Rating:</span>{" "}
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
          <p className="text-lg mb-2 text-secondary">
            <span className="font-bold">Available Quantity:</span> {quantity}
          </p>
          <p className="text-gray-500 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
