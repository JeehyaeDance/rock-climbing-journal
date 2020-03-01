import React from "react";
import PlusIcon from "./icons/PlusIcon.jsx";
import GraphIcon from "./icons/GraphIcon.jsx";
import InboxIcon from "./icons/InboxIcon.jsx";
import SettingIcon from "./icons/SettingIcon.jsx";
import styles from "./style/NavBar.css";
import { Link } from "react-router-dom";

function NavBarComponent(props) {
  return (
    <div className={styles.navBar}>
      <Link to="/" className={styles["nav-btn"]}>
        <PlusIcon /> <p className={styles["nav-btn-name"]}>New Climb</p>
      </Link>
      <Link to="/stat" className={styles["nav-btn"]}>
        <GraphIcon /> <p className={styles["nav-btn-name"]}>Statistics</p>
      </Link>
      <Link to="/notes" className={styles["nav-btn"]}>
        <InboxIcon /> <p className={styles["nav-btn-name"]}>Notes</p>
      </Link>
      <Link to="/setting" className={styles["nav-btn-last"]}>
        <SettingIcon /> <p className={styles["nav-btn-name"]}>Setting</p>
      </Link>
    </div>
  );
}

export default NavBarComponent;
