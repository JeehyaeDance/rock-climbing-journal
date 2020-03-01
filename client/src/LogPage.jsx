import React from "react";
import styles from "./style/LogPage.css";
import axios from "axios";

class LogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      note: "",
      userId: this.props.userId,
      isLogged: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    axios
      .post("/log", {
        level: this.state.level,
        note: this.state.note,
        userId: this.state.userId
      })
      .then(response => {
        this.setState({
          isLogged: !this.state.isLogged,
          level: 0,
          note: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { level, isLogged, note } = this.state;
    return (
      <div className={styles.centerPiece}>
        <form className={styles.formStyle}>
          <label>Select Level</label>
          <div className={styles["radio-group"]}>
            <input type="radio" id="V0" name="level" value="V0" />
            <label htmlFor="V0">V0</label>
            <input type="radio" id="V1" name="level" value="V1" />
            <label htmlFor="V1">V1</label>
            <input type="radio" id="V2" name="level" value="V2" />
            <label htmlFor="V2">V2</label>
            <input type="radio" id="V3" name="level" value="V3" />
            <label htmlFor="V3">V3</label>
            <input type="radio" id="V4" name="level" value="V4" />
            <label htmlFor="V4">V4</label>
            <input type="radio" id="V5" name="level" value="V5" />
            <label htmlFor="V5">V5</label>
            <input type="radio" id="V6" name="level" value="V6" />
            <label htmlFor="V6">V6</label>
            <input type="radio" id="V7" name="level" value="V7" />
            <label htmlFor="V7">V7</label>
            <input type="radio" id="V8" name="level" value="V8" />
            <label htmlFor="V8">V8</label>
            <input type="radio" id="V9" name="level" value="V9" />
            <label htmlFor="V9">V9</label>
          </div>
          {/* <select id="level" value={level} onChange={this.handleChange}>
            <option value="0">V0</option>
            <option value="1">V1</option>
            <option value="2">V2</option>
            <option value="3">V3</option>
            <option value="4">V4</option>
            <option value="5">V5</option>
            <option value="6">V6</option>
            <option value="7">V7</option>
            <option value="8">V8</option>
            <option value="9">V9</option>
            <option value="10">V10</option>
          </select> */}
          <label>Add Note</label>
          <textarea className={styles.noteBox} id="note" value={note} onChange={this.handleChange}></textarea>
        </form>
        <button onClick={this.handleClick}>Save</button>
        {isLogged ? <span className={styles.saveMsg}>Your log is saved! 🧗🏻‍♀️</span> : null}
      </div>
    );
  }
}

export default LogPage;
