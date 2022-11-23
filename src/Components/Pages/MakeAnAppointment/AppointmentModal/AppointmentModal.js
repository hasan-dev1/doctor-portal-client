import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Others/UserContext/UserContext";

const AppointmentModal = ({ treatment, refetch, setTreatment }) => {
  const { user } = useContext(AuthContext);

  const { stime, option } = treatment;
  const handleModalForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const appointmentName = option?.name;
    const appointmentPrice = option?.price;
    const appointmenDate = stime;
    const appointmentTime = form.option.value;
    const patientName = form.pname.value;
    const patientPhone = form.pphone.value;
    const patientEmail = form.pemail.value;

    const patientInfo = {
      appointmentName,
      appointmentPrice,
      appointmenDate,
      appointmentTime,
      patientName,
      patientPhone,
      patientEmail,
    };

    fetch(`https://doctors-server-one.vercel.app/appointmentlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Appointment Listet Succesfully");
          refetch();
          setTreatment(null);
        } else {
          toast.error(data.message);
          console.log(data.message);
        }
      });
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal`} className="modal-toggle" />
      <div className="modal text-accent">
        <div className="modal-box relative ">
          <label
            htmlFor={`my-modal`}
            className="btn btn-sm btn-circle absolute bg-black right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-start -mt-3">
            {option?.slots?.name}
          </h3>
          <div className="mt-6">
            <form onSubmit={handleModalForm}>
              <div>
                <input
                  defaultValue={stime}
                  readOnly
                  className="input input-bordered w-full text-start text-xl bg-slate-300 mb-3"
                  type="text"
                />
              </div>
              <div>
                <input
                  defaultValue={"$" + option?.price}
                  readOnly
                  className="input input-bordered w-full text-start text-xl bg-slate-300 my-3"
                  type="text"
                />
              </div>
              <div>
                <select
                  className="input input-bordered w-full bg-slate-300 my-3"
                  name="option"
                  id=""
                >
                  {option?.slots.map((items, idx) => (
                    <option key={idx} defaultValue={items}>
                      {items}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  placeholder="Name"
                  required
                  readOnly
                  defaultValue={user?.uid ? user.displayName : "Set Your Name"}
                  name="pname"
                  className="input input-bordered w-full bg-slate-100 text-xl my-3"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  defaultValue={user?.email}
                  name="pemail"
                  className="input input-bordered w-full bg-slate-100 text-xl my-3"
                  type="email"
                />
              </div>
              <div>
                <input
                  placeholder="Phone"
                  required
                  name="pphone"
                  className="input input-bordered w-full bg-slate-100 text-xl my-3"
                  type="text"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary text-slate-200 bg-accent w-full mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
