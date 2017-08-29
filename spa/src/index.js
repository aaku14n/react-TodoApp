import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route
        path="/case/:userId/:name"
        name="Information"
        component={Profile}
      />
      <Route path="/App/data" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
