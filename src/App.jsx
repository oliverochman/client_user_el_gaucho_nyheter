import React from "react";
import DisplayArticles from "./components/DisplayArticles";
import SingleArticle from "./components/SingleArticle";
import { Menu } from "semantic-ui-react";

import { Switch, Router, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayArticles} />
        <Route exact path="/:category" component={DisplayArticles} />
        {/* <Route exact path="/articles/:id" component={SingleArticle} /> */}
      </Switch>
    </>
  );
};

export default App;
