import React from "react";
import Login from "./LogIn.jsx";
import LogPage from "./LogPage.jsx";
import CreateAcc from "./CreateAcc.jsx";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export function PublicRouter(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login logInState={props.logInState} />
        </Route>
        <Route path="/createAcc">
          <CreateAcc />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export function PrivateRouter(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <LogPage userInfo={props.userInfo} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
