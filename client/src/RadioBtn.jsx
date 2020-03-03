import React from "react";
import styles from "./style/RadioBtn.css";

function RadioBtn(props) {
  return (
    <>
      <input
        type="radio"
        id={props.level}
        name="level"
        value={props.level}
        checked={props.stateLevel === props.level}
        className={styles["radio-input"]}
        readOnly
      />
      <label
        htmlFor={props.level}
        className={styles["radio-label"]}
        onClick={() => props.handleRadioChange(props.level)}
      >
        V{props.level}
      </label>
    </>
  );
}

export default RadioBtn;
