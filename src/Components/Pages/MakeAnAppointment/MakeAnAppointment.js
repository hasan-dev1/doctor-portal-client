import React from "react";
import chair from "../../assets/images/chair.png";
import chairbg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import AppointmentDetails from "./AppointmentDetails";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal/AppointmentModal";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Others/UserContext/UserContext";

const MakeAnAppointment = () => {
  const { selected, setSelected } = useContext(AuthContext);
  const [treatment, setTreatment] = useState(null);

  const datafromtime = format(selected, "PP");
  const {
    data: appointmentoption = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentlist", datafromtime],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-server-one.vercel.app/appointmentlist?date=${datafromtime}`
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div
        className="flex justify-between lg:flex-row-reverse flex-col"
        style={{
          backgroundImage: `url(${chairbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "80px 0px",
          margin: "80px 0",
        }}
      >
        <div className="lg:w-1/2 rounded mx-2">
          <img src={chair} alt="" />
        </div>
        <div className="lg:w-1/2 flex justify-center text-accent">
          <DayPicker
            className="bg-slate-200 rounded p-3"
            mode="single"
            selected={selected}
            onSelect={(data) => {
              if (data) {
                setSelected(data);
              }
            }}
          ></DayPicker>
        </div>
      </div>

      <div className="mx-2">
        <div>
          <h3 className="text-primary text-center text-xl font-bold">
            Available Appointments on {format(selected, "PP")}
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-20">
          {appointmentoption.map((option) => (
            <AppointmentDetails
              key={option._id}
              option={option}
              setTreatment={setTreatment}
            ></AppointmentDetails>
          ))}
        </div>
        {treatment !== null ? (
          <AppointmentModal
            setTreatment={setTreatment}
            treatment={treatment}
            refetch={refetch}
          ></AppointmentModal>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default MakeAnAppointment;
