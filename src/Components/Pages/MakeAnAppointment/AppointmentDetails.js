import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Others/UserContext/UserContext';

const AppointmentDetails = ({option, setTreatment}) => {
  const {selected} = useContext(AuthContext)
  const stime = format(selected, 'PP');
  const appoInfo = {stime, option}
    const {name, slots, price} = option;
    return (
      <>
        <div className="card  shadow-xl">
          <div className=" flex flex-col justify-center items-center py-12 text-accent">
            <h2 className="card-title text-2xl text-primary">{name}</h2>
            <p className="pt-3">
              {slots.length > 0 ? slots[0] : "Try another days"}
            </p>
            <p className="pb-3">
              {slots.length > 0
                ? slots.length > 1
                  ? slots.length + " Spaces"
                  : "Space"
                : ""}
            </p>
            <p>Price : ${price}</p>
            <label
              htmlFor={`my-modal`}
              onClick={() => setTreatment(appoInfo)}
              className="btn btn-primary font-bold text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </>
    );
};

export default AppointmentDetails;