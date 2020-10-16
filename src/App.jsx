import React from "react";
import DisplayArticles from "./components/DisplayArticles";
import SingleArticle from "./components/SingleArticle";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayArticles} />
        <Route exact path="/category/:category" component={DisplayArticles} />
        <Route exact path="/articles/:id" component={SingleArticle} />
        <Route exact path="/login" component={LoginForm} /> 
      </Switch>
    </>
  );
};

export default App;
