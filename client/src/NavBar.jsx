import React from "react";
import PlusIcon from "./icons/PlusIcon.jsx";
import GraphIcon from "./icons/GraphIcon.jsx";
import InboxIcon from "./icons/InboxIcon.jsx";
import SettingIcon from "./icons/SettingIcon.jsx";
import styles from "./style/NavBar.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function NavBarComponent(props) {
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
    <div className={styles.navBar}>
      <span className={styles.welcome}>Hello, {props.userName}!</span>
      <div onClick={logOut} className={styles.logoutBtn}>
        Log Out
      </div>
      <Link to="/" className={styles.navBtn}>
        <PlusIcon />
      </Link>
      <Link to="/stat" className={styles.navBtn}>
        <GraphIcon />
      </Link>
      <Link to="/notes" className={styles.navBtn}>
        <InboxIcon />
      </Link>
      <Link to="/setting" className={styles.navBtn}>
        <SettingIcon />
      </Link>
    </div>
  );
}

const NavBar = withRouter(NavBarComponent);

export default NavBar;
