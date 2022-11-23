import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Others/UserContext/UserContext";
import ResetModal from "./ResetModal/ResetModal";

const Login = () => {
  const [error, setError] = useState();
  const [resetmodal, setResetModal] = useState(null);
  const { handleLogin, resetYourPass, googlelogin } = useContext(AuthContext);
  const {
    register,
    resetField,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const resetloginpage = () => {
    resetField("email");
    resetField("password");
  };

  const login = (data) => {
    handleLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        resetloginpage();
        setError("");
        toast.success("Login SucsessFully");

        fetch(` https://doctors-server-one.vercel.app/jwt?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("doctorsToken", data.token);
          });

        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleResetpass = (e) => {
    e.preventDefault();
    setResetModal(null);
    const passResetEmail = e.target.resetEmail.value;
    resetYourPass(passResetEmail)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const googlesignin = () => {
    const GoogleProvider = new GoogleAuthProvider();
    googlelogin(GoogleProvider)
      .then(() => {
        toast.success("Login SucsessFully");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <div className="w-1/3 mx-auto text-accent bg-white shadow-xl rounded my-6 py-6">
        <h3 className="text-4xl my-6 font-bold text-center pt-2">Login</h3>

        <form onSubmit={handleSubmit(login)} className="p-6 text-start">
          <div className="my-3 font-semibold">
            <label htmlFor="Email" className="ml-1">
              Email
            </label>
            <input
              {...register("email", { required: "Email is Required" })}
              className="input bg-slate-100 input-bordered w-full"
              type="email"
              name="email"
            />
            {errors.eamil?.message}
          </div>
          <div className="my-3 font-semibold">
            <label htmlFor="password" className="ml-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "your pass is too short" },
              })}
              className="input bg-slate-100 input-bordered w-full"
              type="password"
            />
            {errors.password?.message}
            <p className="text-red-600">{error}</p>
            <label
              onClick={() => {
                const email = getValues("email");
                setResetModal(email);
              }}
              htmlFor="resetPassModal"
              className="cursor-pointer hover:text-sky-600"
            >
              Forgot Password?
            </label>
          </div>
          <button className="btn btn-accent text-bold text-white w-full  mt-6 mb-3">
            Login
          </button>
          <p className="text-font-bold text-center">
            New To Doctors Portals?{" "}
            <Link to={"/signup"} className="text-primary">
              Creat new account
            </Link>
          </p>
        </form>
        <div className="my-4 mx-1 border-t-2 relative">
          <p className="p-6 bg-white absolute -top-10 left-[50%] -translate-x-[50%]  ">
            OR
          </p>
        </div>
        <div className=" p-6">
          <button
            onClick={googlesignin}
            type="submit"
            className="text-bold text-2xl text-white text-center w-full btn btn-accent"
          >
            Continue with Google
          </button>
        </div>
      </div>

      {resetmodal !== null ? (
        <ResetModal
          handleResetpass={handleResetpass}
          resetmodal={resetmodal}
        ></ResetModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
