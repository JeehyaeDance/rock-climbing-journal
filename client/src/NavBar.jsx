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
      <Link to="/" className={styles.navBtn}>
        <PlusIcon /> <p>New Climb</p>
      </Link>
      <Link to="/stat" className={styles.navBtn}>
        <GraphIcon /> <p>Statistics</p>
      </Link>
      <Link to="/notes" className={styles.navBtn}>
        <InboxIcon /> <p>Notes</p>
      </Link>
      <Link to="/setting" className={styles.navBtn}>
        <SettingIcon /> <p>Setting</p>
      </Link>
    </div>
  );
}

export default NavBarComponent;
