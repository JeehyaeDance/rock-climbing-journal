import React from "react";
import Login from "./LogIn.jsx";
import LogPage from "./LogPage.jsx";
import CreateAcc from "./CreateAcc.jsx";
import Stat from "./Stat.jsx";
import NavBar from "./NavBar.jsx";
import Notes from "./Notes.jsx";
import Splash from "./Splash.jsx";
import Setting from "./Setting.jsx";
import styles from "./style/Router.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export function PublicRouter(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route exact path="/loginPage">
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
      <div className={styles.background}>
        <div className={styles.mainBox}>
          <NavBar userName={props.userInfo.userName} logInState={props.logInState} />
          <Switch>
            <Route exact path="/">
              <LogPage userId={props.userInfo.userId} />
            </Route>
            <Route path="/stat">
              <Stat userId={props.userInfo.userId} />
            </Route>
            <Route path="/notes">
              <Notes userId={props.userInfo.userId} />
            </Route>
            <Route path="/setting">
              <Setting userId={props.userInfo.userId} />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
