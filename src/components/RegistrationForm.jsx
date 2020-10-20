import React from "react";
import { Button, Form, Container, Menu } from "semantic-ui-react";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  return (
    <Container>
      <Form
        data-cy="registration-form"
        onSubmit={(event) => login(event, dispatch, history)}
      >
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Email:"
          placeholder="email"
          name="email"
          type="email"
          data-cy="email"
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          placeholder="password"
          label="Password:"
          type="password"
          name="password"
          data-cy="password"
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          placeholder="confirm password"
          label="Confirm Password:"
          type="password_confirmation"
          name="password_confirmation"
          data-cy="password-confirmation"
        />
        <Button data-cy="submit" content="Submit" primary />
      </Form>
    </Container>
  );
};
export default RegistrationForm;
