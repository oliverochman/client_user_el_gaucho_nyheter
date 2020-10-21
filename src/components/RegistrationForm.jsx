import React, { useState } from "react";
import { Button, Form, Container, Message } from "semantic-ui-react";
import { signUp } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState();

  const register = async (e) => {
    e.preventDefault();
    const response = await signUp(e, dispatch, history);
    setMessage(response);
  };

  return (
    <Container>
      <Form data-cy="registration-form" onSubmit={register}>
        <Form.Input
          data-cy="email"
          icon="user"
          iconPosition="left"
          label="Email:"
          placeholder="email"
          name="email"
          type="email"
        />

        <Form.Input
          data-cy="password"
          icon="lock"
          iconPosition="left"
          placeholder="password"
          label="Password:"
          type="password"
          name="password"
        />

        <Form.Input
          data-cy="password-confirmation"
          icon="lock"
          iconPosition="left"
          placeholder="confirm password"
          label="Confirm Password:"
          type="password"
          name="password_confirmation"
        />
        <Button data-cy="submit" content="Submit" primary />
      </Form>

      {message && (
        <Message data-cy="message" color="red">
          {message}
        </Message>
      )}
    </Container>
  );
};
export default RegistrationForm;
