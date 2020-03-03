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
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleRadioChange(value) {
    this.setState({
      level: value
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
            <div className={styles["radio-wrapper"]} onClick={() => this.handleRadioChange(0)}>
              <input type="radio" id="V0" name="level" value={0} checked={this.state.level === 0} />
              <label htmlFor={0}>V0</label>
            </div>
            <input type="radio" id="V1" name="level" value={1} checked={this.state.level === 1} />
            <label htmlFor={1}>V1</label>
            <input type="radio" id="V2" name="level" value={2} checked={this.state.level === 2} />
            <label htmlFor={2}>V2</label>
            <input type="radio" id="V3" name="level" value={3} checked={this.state.level === 3} />
            <label htmlFor={3}>V3</label>
            <input type="radio" id="V4" name="level" value={4} checked={this.state.level === 4} />
            <label htmlFor={4}>V4</label>
            <input type="radio" id="V5" name="level" value={5} checked={this.state.level === 5} />
            <label htmlFor={5}>V5</label>
            <input type="radio" id="V6" name="level" value={6} checked={this.state.level === 6} />
            <label htmlFor={6}>V6</label>
            <input type="radio" id="V7" name="level" value={7} checked={this.state.level === 7} />
            <label htmlFor={7}>V7</label>
            <input type="radio" id="V8" name="level" value={8} checked={this.state.level === 8} />
            <label htmlFor={8}>V8</label>
            <input type="radio" id="V9" name="level" value={9} checked={this.state.level === 9} />
            <label htmlFor={9}>V9</label>
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
