import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";
const Register = () => {
  useTitle('Register')
  const { createUser, updateProf } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password.length<6) {
      return Swal.fire({
        icon: "error",
        text: "password must contain 6 character",
      });
    }
    createUser(data.email, data.password)
      .then((result) => {
        updateProf(data.name, data.photoURL);
        Swal.fire({
          icon: "success",
          text: "User Created Successfully",
        });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="min-h-screen bg-slate-50 md:p-10 p-3 md:flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" space-y-7 mx-auto my-10 bg-white p-4 md:w-[70vh] rounded-lg"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-neutral">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            {...register("name")}
            className="input input-bordered text-neutral"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-neutral">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            {...register("email")}
            className="input input-bordered text-neutral"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-neutral">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered text-neutral"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-neutral">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            className="input input-bordered text-neutral"
            {...register("photoURL", { required: true })}
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
        <div>
          <p className="text-neutral">
            Already have an account?{" "}
            <Link to="/login" className="link link-secondary">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
