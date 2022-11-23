import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51M6JfkFG110SVNLeM1ohOCMle877ylgnIusa6b9V1YF7QzyaZnchPQVnIhkyC07ozwYlB1UPlXcNQlPppJAtn9nn0099nvGJ2Q')
const Payment = () => {
    const appointment = useLoaderData()
    return (
      <div>
        <h4 className="text-3xl text-start p-8">Payment</h4>
        <div className="w-2/4 mx-auto text-start bg-slate-200 p-8 rounded">
          <p className="text-xl my-2">
            Patient Name : <strong>{appointment.patientName}</strong>{" "}
          </p>
          <p className="text-xl my-2">
            Your Appointment is : <strong>{appointment.appointmentName}</strong>{" "}
          </p>
          <p className="text-xl my-2">
            Appointment Date is : <strong>{appointment.appointmenDate}</strong>{" "}
          </p>
          <p className="text-xl my-2">
            Appointment Time is : <strong>{appointment.appointmentTime}</strong>{" "}
          </p>
          <p className="text-xl my-2">
            You have to pay total :{" "}
            <strong>${appointment.appointmentPrice}</strong>{" "}
          </p>
          <Elements stripe={stripePromise}>
            <CheckOutForm appointment={appointment}></CheckOutForm>
          </Elements>
          <div className="text-center mt-8"></div>
        </div>
      </div>
    );
};

export default Payment;