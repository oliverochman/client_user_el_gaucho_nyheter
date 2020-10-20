import React from "react";
import { Button, Form, Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
    <Container>
      <Form
        data-cy="login-form"
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
        <Button data-cy="submit" content="Submit" primary />
      </Form>
      </Container>

      <Container>
       
        <Menu.Item as={Link} to="/register" data-cy="register" width={2}>Don't have an account yet? Click here to sign up!</Menu.Item>
   
        </Container>
    </>
  );
};

export default LoginForm;
