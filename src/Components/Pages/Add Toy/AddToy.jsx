import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToy = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { price, rating } = data;

    if (!price || isNaN(parseInt(price))) {
      Swal.fire({
        icon: "error",
        text: "Please input a valid price",
      });
      return;
    }

    if (!rating || isNaN(parseInt(rating))) {
      Swal.fire({
        icon: "error",
        text: "Please input a valid rating",
      });
      return;
    }

    if (parseInt(rating) > 5) {
      Swal.fire({
        icon: "error",
        text: "Rating cannot be higher than 5",
      });
      return;
    }
    fetch("http://localhost:5000/toys",{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          Swal.fire({
            icon: "success",
            text: "Toy Added Successfully",
          });
          return;
        }
      });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Add A Toy
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto px-2 md:px-0 md:grid gap-4 grid-cols-2"
      >
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-accent">
            Picture URL of the toy
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-accent">
            Toy Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
          />
          {errors.toyName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="seller" className="block mb-2 text-accent">
            Seller Name
          </label>
          <input
            type="text"
            id="seller"
            defaultValue={user?.displayName}
            {...register("seller", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block mb-2 text-accent">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            {...register("seller_email", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-accent">
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
          >
            <option value="X Man">X Man</option>
            <option value="Avengers">Avengers</option>
            <option value="Fantastic Four">Fantastic Four</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-accent">
            Price
          </label>
          <input
            type="text"
            id="price"
            {...register("price", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
          />
          {errors.price && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 text-accent">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            {...register("rating", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
          />
          {errors.rating && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2 text-accent">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            {...register("quantity", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
          />
          {errors.quantity && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4 col-span-2">
          <label htmlFor="description" className="block mb-2 text-accent">
            Detail Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="border border-gray-400 p-2 w-full h-24 resize-none text-neutral"
          ></textarea>
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="col-span-2 text-center">
          <button type="submit" className="btn btn-primary normal-case w-full">
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
