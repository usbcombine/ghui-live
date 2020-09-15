import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Login from "./login/Login";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
