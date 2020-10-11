import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import DisplayArticles from "./DisplayArticles";
import { Router, Link, Route, Switch } from "react-router-dom";

const Header = () => {
  const [category, setCategories] = useState("");

  // useEffect(() => {
  //   const getArticlesIndex = async () => {
  //     setCategories(await Articles.category());
  //   };
  //   getArticlesIndex();

  const categ = (categ) => {
    DisplayArticles("news");
  };
  // }, category);

  return (
    <Router>
      <div>
        <Menu inverted>
          <Menu.Item>
            <h1 data-cy="header">El Gaucho Nyheter</h1>

            <Link to="/" data-cy="news" onClick={setCategories("news")}  >
              News
            </Link>
            <button data-cy="sports" onClick={() => categ("sports")}>
              Sports
            </button>
            <button data-cy="politics" onClick={() => categ("politics")}>
              Politics
            </button>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <DisplayArticles {...props} category={category} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
