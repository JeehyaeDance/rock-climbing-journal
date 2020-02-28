import React from "react";
import styles from "./style/Splash.css";
import { Link } from "react-router-dom";
import Page from "./Page";

function Splash() {
  return (
    <Page private={false}>
      <div className={styles["text-container"]}>
        <h1 className={styles.title}>The best way to track your rock climbing</h1>
        <p className={styles.description}>
          Climbing Day is a rock climbing journal application that is used to track your day to day rock climbing
          activity and progress. If you are looking to improve in rock climbing, give Climbing Day a try!
        </p>
      </div>
      <div className={styles["form-container"]}>
        <Link to="/createAcc" className={styles.button}>
          Create Account
        </Link>

        <span className={styles["login-text"]}>
          Already have an account?
          <Link to="/loginPage" className={styles.login}>
            Login
          </Link>
        </span>
      </div>
    </Page>
  );
}

export default Splash;
