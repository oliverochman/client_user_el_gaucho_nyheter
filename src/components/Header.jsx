import Articles from "../modules/articles";
import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const [category, setCategories] = useState("");

  useEffect(() => {
    const getArticlesIndex = async () => {
      setCategories(await Articles.category());
    };
    getArticlesIndex();
  }, category);

  return (
    <Menu inverted>
      <Menu.Item>
        <h1 data-cy="header">El Gaucho Nyheter</h1>
        <button data-cy="news" onClick={() => setCategories("news")}>
          News
        </button>
        <button data-cy="sports" onClick={() => setCategories("sports")}>
          Sports
        </button>
        <button data-cy="politics" onClick={() => setCategories("politics")}>
          Politics
        </button>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
