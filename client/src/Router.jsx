import React from "react";
import Login from "./LogIn.jsx";
import LogPage from "./LogPage.jsx";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/log">
          <LogPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
