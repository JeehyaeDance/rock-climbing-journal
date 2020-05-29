import React from "react";
import styles from "./style/Header.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Header(props) {
  const logOut = e => {
    e.preventDefault();
    axios
      .get("/logout")
      .then(result => {
        let userInfo = {
          username: "",
          userid: 0
        };
        props.history.replace("/");
        props.logInState(userInfo, false);
      })
      .catch(e => console.log(e));
  };
  return (
    <div className={styles.header}>
      <h2
        onClick={() => {
          props.history.replace("/");
        }}
        className={styles.title}
      >
        Climbing Day
      </h2>
      {props.private ? (
        <div className={styles.headerRight}>
          <p className={styles.greeting}>Hello, {props.userName}</p>
          <span onClick={logOut} className={styles.logout}>
            Log Out
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default withRouter(Header);
