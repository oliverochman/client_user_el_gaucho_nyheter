import React from "react";
import { Menu } from "semantic-ui-react";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <h1 data-cy="header">El Gaucho Nyheter</h1>
        <Menu.Item as={Link} to="/" data-cy="home">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/category/news" data-cy="news">
          News
        </Menu.Item>
        <Menu.Item as={Link} to="/category/sports" data-cy="sports">
          Sports
        </Menu.Item>
        <Menu.Item as={Link} to="/category/politics" data-cy="politics">
          Politics
        </Menu.Item>
      </Menu.Item>
      <Menu.Item as={Link} to="/login" data-cy="login" position="right">
        Log In
      </Menu.Item>
    </Menu>
  );
};

export default Header;
