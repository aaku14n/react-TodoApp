import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PostPage from "./components/Postpage";
import ProfileEdit from "./components/ProfileEdit";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/profile/:userId" name="Information" component={PostPage} />
      <Route path="/profileEdit" component={ProfileEdit} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
