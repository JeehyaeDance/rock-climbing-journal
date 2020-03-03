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
        readOnly
      />
      <label htmlFor={props.level} onClick={() => this.handleRadioChange(props.level)}>
        V0
      </label>
    </>
  );
}

export default RadioBtn;
