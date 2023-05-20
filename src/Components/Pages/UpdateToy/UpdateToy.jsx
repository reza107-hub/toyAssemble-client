import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  useTitle("Update Toy");
  const toyInformation = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { price } = data;

    if (!price || isNaN(parseInt(price))) {
      Swal.fire({
        icon: "error",
        text: "Please input a valid price",
      });
      return;
    }
    fetch(`http://localhost:5000/toys/${toyInformation._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
            Swal.fire({
                icon: "success",
                text: "Toy updated Successfully",
              });
        }
      });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Update Toy Information
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto px-2 md:px-0 md:grid gap-4 grid-cols-2"
      >
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-accent">
            Price
          </label>
          <input
            type="text"
            id="price"
            {...register("price", { required: true })}
            className="border border-gray-400 p-2 w-full text-neutral"
            defaultValue={toyInformation.price}
          />
          {errors.price && (
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
            defaultValue={toyInformation.quantity}
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
            className="border border-gray-400 p-2 w-full h-36 resize-none text-neutral"
            defaultValue={toyInformation.description}
          ></textarea>
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="col-span-2 text-center">
          <button type="submit" className="btn btn-primary normal-case w-full">
            Update Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
