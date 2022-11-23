import { format } from "date-fns";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Others/UserContext/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { creatingUser, googlelogin, updateprofileinfo } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState();

  const resetf = () => {
    resetField("name");
    resetField("email");
    resetField("password");
    resetField("photourl");
  };

  const registerForm = (data) => {
    const { name, email, photourl, password } = data;

    //usercreating
    creatingUser(email, password)
      .then((result) => {
        setError("");
        userinfo(name, photourl);
        resetf();
        const user = result.user;
        toast.success("User Created Successfully");
        saveUserInfo(name, email, photourl, new Date());
        navigate("/login");
      })
      .catch((err) => setError(err.message));
  };

  //updateprofile
  const userinfo = (username, userPhoto) => {
    const userProfile = {
      displayName: username,
      photoURL: userPhoto,
    };

    updateprofileinfo(userProfile)
      .then(() => {
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  //save userinfo
  const saveUserInfo = (name, email, photoURL, date) => {
    const newDate = format(date, "PP");
    const userInfo = {
      name,
      email,
      photoURL,
      newDate,
    };

    fetch(`https://doctors-server-one.vercel.app/totalUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.log(err.message));
  };
  //google login
  const googlesignin = () => {
    const GoogleProvider = new GoogleAuthProvider();
    googlelogin(GoogleProvider)
      .then(() => {})
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="w-1/3 mx-auto text-accent bg-white shadow-xl rounded my-6 py-6">
        <h3 className="text-4xl my-6 font-bold text-center pt-2">SignUp</h3>
        <form onSubmit={handleSubmit(registerForm)} className="p-6 text-start">
          <div className="my-3 font-semibold">
            <label htmlFor="name" className="ml-1">
              Name
            </label>
            <input
              {...register("name", { required: "Name fields required" })}
              className="input bg-slate-100 input-bordered w-full"
              type="text"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="my-3 font-semibold">
            <label htmlFor="photourl" className="ml-1">
              Photo URL
            </label>
            <input
              {...register("photourl")}
              className="input bg-slate-100 input-bordered w-full"
              type="text"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="my-3 font-semibold">
            <label htmlFor="Email" className="ml-1">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              className="input bg-slate-100 input-bordered w-full"
              type="email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="my-3 font-semibold">
            <label htmlFor="password" className="ml-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Email fields required",
                minLength: {
                  value: 6,
                  message: "must be 6 and greater pass",
                },
                pattern: {
                  value: /[A-Z]/,
                  message: "pass must have Capital latter",
                },
              })}
              className="input bg-slate-100 input-bordered w-full"
              type="password"
            />
            <p className="text-red-600">{errors.password?.message}</p>
            <p className="text-red-600">{error}</p>

            <p>Forgot Password?</p>
          </div>
          <button className="btn btn-accent text-bold text-white w-full  mt-6 mb-3">
            SignUp
          </button>
          <p className="text-font-bold text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary">
              Login
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
            className="text-bold text-2xl text-white text-center w-full btn btn-accent"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
