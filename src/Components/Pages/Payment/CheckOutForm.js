import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ appointment }) => {
  const { appointmentPrice, patientName, patientEmail, _id } = appointment;
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://doctors-server-one.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
      },
      body: JSON.stringify({ appointmentPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [appointmentPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    setProcessing(true);
    const { paymentIntent, error: errorElement } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });
    setProcessing(false);
    if (errorElement) {
      setError(errorElement.message);
      toast.error("Payment Cancelled");
    } else {
      setError("");
      toast.success(`Your payment is successful ${paymentIntent.id}`);

      const paymentInformation = {
        appointmentID: _id,
        amount: paymentIntent.amount / 100,
        paymentDate: new Date().toLocaleDateString,
        currency: paymentIntent.currency,
        transactionID: paymentIntent.id,
        paymentMethod: paymentIntent.payment_method_types[0],
        patientEmail: patientEmail,
      };
      fetch(`https://doctors-server-one.vercel.app/storedpaymentInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
        },
        body: JSON.stringify(paymentInformation),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            navigate("/dashboardmain/");
          }
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className={`btn w-full btn-primary text-white  mx-auto my-5`}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600 font-bold">{error}</p>
    </div>
  );
};

export default CheckOutForm;
