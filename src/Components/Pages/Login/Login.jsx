import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const { signIn, logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
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
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        <div>
          <p className="text-neutral">
            New at here?{" "}
            <Link to="/register" className="link link-secondary">
              Register
            </Link>
          </p>
        </div>
        <div className="divider"></div>
        <div className="">
          <button
            onClick={handleLogInWithGoogle}
            className="btn justify-between w-full normal-case btn-outline btn-secondary"
          >
            Log in with Google <FaGoogle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
