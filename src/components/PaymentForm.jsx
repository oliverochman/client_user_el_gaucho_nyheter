import React from "react";
import {
  CardExpiryElement,
  CardCVCElement,
  CardNumberElement,
  injectStripe,
} from "react-stripe-elements";
import { Button, Form, Container } from "semantic-ui-react";

const PaymentForm = (props) => {
  const payWithStripe = async (event) => {
    event.preventDefault();
    let stripeResponse = await props.stripe.createToken();
    props.submitPayment(stripeResponse.token.id);
  };

  return (
    <Container>
      <Form onSubmit={payWithStripe}>
        <div data-cy="card-number">
          <label>Card Number</label>
          <CardNumberElement />
        </div>

        <div data-cy="card-expiry">
          <label>Card Expiry</label>
          <CardExpiryElement />
        </div>

        <div data-cy="card-cvc">
          <label>Card CVC</label>
          <CardCVCElement />
        </div>

        <Button color="blue">Start your subscription</Button>
      </Form>
    </Container>
  );
};

export default injectStripe(PaymentForm);
