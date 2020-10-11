import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import DisplayArticles from "./DisplayArticles";
import { Router, Link, Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <h1 data-cy="header">El Gaucho Nyheter</h1>
        <Link to="/news" data-cy="news"  >
          News
        </Link>
        <Link to="/sports" data-cy="sports">
          Sports
        </Link>
        <Link to="/politics" data-cy="politics">
          Politics
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
