import React from "react";
import styles from "./style/Splash.css";

function Splash() {
  return (
    <div className={styles.allFont}>
      <h2>Climbing Day</h2>
      <div className={styles.centerContents}>
        <div className={styles.centerExp}>
          <span className={styles.mainExp}>The best way to track your rock climbing</span>
          <span className={styles.subExp}>
            Climbing Day is a rock climbing journal application that is used to track your day to day rock climbing
            activity and progress. If you are looking to improve in rock climbing, give Climbing Day a try!
          </span>
        </div>
        <div className={styles.formBox}>
          <span className={styles.button}>Create Account</span>
          <div className={styles.loginOption}>
            <span>Already have an account?</span>
            <span className={styles.login}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
