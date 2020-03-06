import React from "react";
import PlusIcon from "./icons/PlusIcon.jsx";
import GraphIcon from "./icons/GraphIcon.jsx";
import InboxIcon from "./icons/InboxIcon.jsx";
import SettingIcon from "./icons/SettingIcon.jsx";
import styles from "./style/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBarComponent(props) {
  return (
    <div className={styles.navBar}>
      <NavLink exact to="/" className={styles["nav-btn"]} activeClassName={styles["btn-active"]}>
        <PlusIcon /> <p className={styles["nav-btn-name"]}>New Climb</p>
      </NavLink>
      <NavLink exact to="/stat" className={styles["nav-btn"]} activeClassName={styles["btn-active"]}>
        <GraphIcon /> <p className={styles["nav-btn-name"]}>Statistics</p>
      </NavLink>
      <NavLink exact to="/notes" className={styles["nav-btn"]} activeClassName={styles["btn-active"]}>
        <InboxIcon /> <p className={styles["nav-btn-name"]}>Notes</p>
      </NavLink>
      <NavLink to="/setting" className={styles["nav-btn-last"]} activeClassName={styles["btn-active"]}>
        <SettingIcon /> <p className={styles["nav-btn-name"]}>Settings</p>
      </NavLink>
    </div>
  );
}

export default NavBarComponent;
