import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data, refetch } = useQuery({
    queryKey: ["totalUser"],
    queryFn: async () =>
      fetch(`https://doctors-server-one.vercel.app/totalUser`).then((res) =>
        res.json()
      ),
  });

  //make admin
  const handlemakeadmin = (id) => {
    fetch(`https://doctors-server-one.vercel.app/totalUser?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      })
      .catch((err) => console.log(err.message));
  };

  //delete admin
  const handleremoveadmin = (remove) => {
    fetch(`https://doctors-server-one.vercel.app/adminRemove?id=${remove}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      })
      .catch((err) => console.log(err.message));
  };
  refetch();
  return (
    <div>
      <h3 className="text-start p-3 font-bold text-3xl">Total User</h3>
      <div className="overflow-x-auto">
        <table className="table w-full px-2">
          <thead>
            <tr>
              <th className="bg-slate-400 text-white font-bold">Q</th>
              <th className="bg-slate-400 text-white font-bold">UserName</th>
              <th className="bg-slate-400 text-white font-bold">UserEmail</th>
              <th className="bg-slate-400 text-white font-bold">UserPhoto</th>
              <th className="bg-slate-400 text-white font-bold">Created at</th>
              <th className="bg-slate-400 text-white font-bold text-center">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((appointment, idx) => (
              <tr key={idx} className="border-b-2">
                <th>{idx + 1}</th>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.photoURL.slice(0, 15) + " ..."}</td>
                <td>{appointment.newDate}</td>
                <td className="text-center">
                  {appointment?.role ? (
                    <button
                      onClick={() => handleremoveadmin(appointment._id)}
                      className="btn btn-primary btn-sm px-2 py-1 m-1 text-white"
                    >
                      Remove admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handlemakeadmin(appointment._id)}
                      className="btn btn-primary btn-sm px-2 py-1 m-1 text-white"
                    >
                      Make admin
                    </button>
                  )}
                  <button className="btn btn-primary btn-sm px-2 py-1 m-1 text-white">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
