import React from "react";
import styles from "./style/Header.css";

function Header(props) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Climbing Day</h2>
      {props.private ? (
        <div className={styles.headerRight}>
          <p className={styles.greeting}>Hello, {props.userName}</p>
          <span className={styles.logout}>Log Out</span>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
