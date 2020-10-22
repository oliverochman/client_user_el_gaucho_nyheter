import React, { useState } from "react";
import { Button, Form, Container, Menu, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState();

  const register = async (e) => {
    e.preventDefault();
    const response = await login(e, dispatch, history);
    setMessage(response);
  };

  return (
    <>
      <Container>
        <Form data-cy="login-form" onSubmit={register}>
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
          <Button data-cy="submit" content="Submit" primary />
        </Form>
      </Container>

      <Container>
        <Menu.Item as={Link} to="/register" data-cy="register">
          Don't have an account yet? Click here to sign up
        </Menu.Item>

        {message && (
          <Message data-cy="message" color="red">
            {message}
          </Message>
        )}
      </Container>
    </>
  );
};

export default LoginForm;
