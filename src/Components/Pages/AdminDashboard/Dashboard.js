import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Others/UserContext/UserContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const { data, refetch } = useQuery({
    queryKey: ["myappointmentlist", user?.email],
    queryFn: async () =>
      fetch(
        `https://doctors-server-one.vercel.app/myappointmentlist?email=${user?.email}`,
        {
          headers: {
            authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
          },
        }
      ).then((res) => res.json()),
  });
  if (data?.length) {
    refetch();
  }
  return (
    <div className="">
      <h3 className="text-start p-3 font-bold text-3xl">My Appointment</h3>
      <div className="overflow-x-auto">
        {data?.length ? (
          <table className="table w-full px-2">
            <thead>
              <tr>
                <th className="bg-slate-400 text-white font-bold">Q</th>
                <th className="bg-slate-400 text-white font-bold">
                  Service Name
                </th>
                <th className="bg-slate-400 text-white font-bold">Patient</th>
                <th className="bg-slate-400 text-white font-bold">
                  Treatment Time
                </th>
                <th className="bg-slate-400 text-white font-bold">Date</th>
                <th className="bg-slate-400 text-white font-bold">Phone</th>
                <th className="bg-slate-400 text-white font-bold">Payment</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((appointment, idx) => (
                <tr key={idx} className="border-b-2">
                  <th>{idx + 1}</th>
                  <td>{appointment.appointmentName}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.appointmenDate}</td>
                  <td>{appointment.patientPhone}</td>
                  <td>
                    {appointment?.appointmentPrice && !appointment.paid ? (
                      <Link
                        to={`/dashboardmain/payment/${appointment._id}`}
                        className="bg-red-500 py-1 px-2 font-semibold text-white rounded "
                      >
                        Pay ${appointment.appointmentPrice}
                      </Link>
                    ) : (
                      <span className="bg-success py-1 px-3 rounded text-white font-semibold">
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Data Not Found Reload or Or add new Appointment"
        )}
      </div>
    </div>
  );
};

export default Dashboard;
