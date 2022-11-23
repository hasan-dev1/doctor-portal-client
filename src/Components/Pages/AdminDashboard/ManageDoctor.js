import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const ManageDoctor = () => {
  const [confirm, setConfirm] = useState();
  const { data: doctorlist, refetch } = useQuery({
    queryKey: ["alldoctors"],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-server-one.vercel.app/adddoctor`,
        {
          headers: {
            authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  //delete doctor
  const handledoctordelete = () => {
    fetch(`https://doctors-server-one.vercel.app/deletedoctor/${confirm._id}`, {
      method: "DELETE",
      headers: {
        authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${confirm.name} Deleted Successfully`);
        }
      });
  };

  return (
    <div>
      <h3 className="text-4xl font-bold text-start mt-2 mb-8">Total Doctor</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-slate-400 text-white"></th>
              <th className="bg-slate-400 text-white">Avatar</th>
              <th className="bg-slate-400 text-white">Name</th>
              <th className="bg-slate-400 text-white">Specialty</th>
              <th className="bg-slate-400 text-white">Email</th>
              <th className="bg-slate-400 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctorlist?.map((doctor, idx) => (
              <tr className="border-b-2" key={doctor._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.photourl} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.email}</td>
                <td>
                  <label
                    htmlFor="confirmationmodal"
                    onClick={() => setConfirm(doctor)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal  */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmationmodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-start">
          <h3 className="font-bold text-lg">
            Are You Sure to Delete {confirm?.name}.
          </h3>
          <p className="py-4">If You Delete Once Its Cant be Undone</p>
          <div className="modal-action">
            <label
              onClick={handledoctordelete}
              htmlFor="confirmationmodal"
              className="btn btn-sm btn-error text-white"
            >
              Delete
            </label>
            <label
              onClick={() => {
                toast.error(`Cancel deleted ${confirm?.name}`);
              }}
              htmlFor="confirmationmodal"
              className="btn btn-sm btn-error btn-outline text-white"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
      {/* modal  */}
    </div>
  );
};

export default ManageDoctor;
