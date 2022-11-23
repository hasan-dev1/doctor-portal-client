import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const navigate = useNavigate();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgbb = process.env.REACT_APP_IMAGEBB_API_KEY;
  console.log(imgbb);
  const { data: speacialty } = useQuery({
    queryKey: ["addspecialities"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://doctors-server-one.vercel.app/specialty`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  const addDoctors = (data) => {
    const name = data.name;
    const email = data.email;
    const specialty = data.specialty;
    const photo = data.photo[0];
    const formData = new FormData();

    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imgbb}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success === true) {
          const photourl = imgdata.data.url;
          const doctor = {
            name,
            email,
            specialty,
            photourl,
          };
          fetch(`https://doctors-server-one.vercel.app/adddoctor`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((doctorsetted) => {
              if (doctorsetted.acknowledged) {
                toast.success("Doctor added Successfully");
                navigate("/dashboardmain/managedoctors");
              } else {
                toast.error("Please Try Again");
              }
            })
            .catch((err) => console.log(err.message));
        } else {
          toast.error("Image Not found");
        }
      })
      .catch((err) => console.log(err.message));

    resetField("name");
    resetField("email");
    resetField("specialty");
    resetField("photo");
  };
  return (
    <div>
      <h3 className="text-4xl text-start mt-8">Add A New Doctor</h3>
      <div className="w-2/3 p-2 bg-slate-300 rounded-lg my-2">
        <form onSubmit={handleSubmit(addDoctors)} className="p-6 text-start">
          <div className="my-3 font-semibold">
            <label htmlFor="name" className="ml-1">
              Name
            </label>
            <input
              {...register("name", { required: "Name is Required" })}
              className="input bg-slate-100 input-bordered w-full"
              type="text"
            />
            {errors.name?.message}
          </div>
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
            <label htmlFor="speacialty" className="ml-1">
              Specialty
            </label>
            <select
              {...register("specialty")}
              className="select w-full bg-slate-100"
            >
              {speacialty?.map((special, idx) => (
                <option key={idx}>{special.name}</option>
              ))}
            </select>
            {errors.specialty?.message}
          </div>

          <div className="my-3 font-semibold">
            <label htmlFor="photo" className="ml-1">
              Upload Photo
            </label>
            <input
              {...register("photo", { required: "photo is Required" })}
              type="file"
              className="file-input bottom-0 file-input-primary bg-slate-100 w-full"
            />
            {errors.photo?.message}
          </div>

          <button className="btn btn-accent text-bold text-white w-full  mt-6 mb-3">
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
