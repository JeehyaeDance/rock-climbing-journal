import React from "react";
import styles from "./style/Splash.css";
import Header from "./Header.jsx";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className={styles.allFont}>
      <Header />
      <div className={styles.centerContents}>
        <div className={styles.centerExp}>
          <span className={styles.mainExp}>The best way to track your rock climbing</span>
          <span className={styles.subExp}>
            Climbing Day is a rock climbing journal application that is used to track your day to day rock climbing
            activity and progress. If you are looking to improve in rock climbing, give Climbing Day a try!
          </span>
        </div>
        <div className={styles.formBox}>
          <Link to="/createAcc" className={styles.button}>
            Create Account
          </Link>
          <div className={styles.loginOption}>
            <span>Already have an account?</span>
            <Link to="/loginPage" className={styles.login}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
