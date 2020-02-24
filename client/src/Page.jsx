import React from "react";
import Header from "./Header.jsx";
import styles from "./style/Page.css";

function Page(props) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={[styles.content, props.className].join(" ")}>{props.children}</div>
    </div>
  );
}

export default Page;
