import React, { useEffect } from "react";
import DisplayArticles from "./components/DisplayArticles";
import SingleArticle from "./components/SingleArticle";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute'
import BecomeSubscriber from './components/BecomeSubscriber'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/category/:category" component={DisplayArticles} />
        <Route exact path="/articles/:id" component={SingleArticle} />
        <Route exact path="/login" component={LoginForm} />

        <ProtectedRoute path="/become-subscriber">
          <BecomeSubscriber />
        </ProtectedRoute>

        <Route path="/" component={DisplayArticles} />

      </Switch>
    </>
  );
};

export default App;
