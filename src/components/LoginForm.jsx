import React from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Container>
      <Form data-cy="login-form" onSubmit={(event) => login(event, dispatch, history)}>
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Email:"
          placeholder="email"
          name="email"
          type="email"
          id="email"
          data-cy="email"
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          placeholder="password"
          label="Password:"
          type="password"
          name="password"
          id="password"
          data-cy="password"
        />
        <Button data-cy="submit" id="Submit" content="Submit" primary />
      </Form>
    </Container>
  );
};

export default LoginForm;
