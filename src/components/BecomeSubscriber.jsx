import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Elements } from "react-stripe-elements";
import PaymentForm from "./PaymentForm";
import Subscriptions from "../modules/subscriptions";

const BecomeSubscriber = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitPayment = async (stripeToken) => {
    let paymentStatus = await Subscriptions.create(stripeToken);
    debugger;
    if (paymentStatus.success) {
      dispatch({
        type: "USER_IS_SUBSCRIBER",
        payload: {
          role: "subscriber",
        },
      });
      history.push("/", { message: paymentStatus.message });
    } else {
      setMessage(paymentStatus.message);
    }
  };

  return (
    <>
      {message && (
        <Message data-cy="message" color="red">
          {message}
        </Message>
      )}
      <Elements>
        <PaymentForm submitPayment={submitPayment} />
      </Elements>
    </>
  );
};

export default BecomeSubscriber;
