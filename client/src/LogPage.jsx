import React from "react";
import styles from "./style/LogPage.css";
import axios from "axios";

class LogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 10,
      note: "",
      userId: this.props.userId,
      isLogged: false
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleRadioChange(value) {
    this.setState({
      level: value
    });
  }

  handleNoteChange(e) {
    this.setState({
      note: e.target.value
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
          level: 10,
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
          <label className={styles["form-label"]}>Select Level</label>
          <div className={styles["radio-group"]}>
            <input type="radio" id="V0" name="level" value={0} checked={level === 0} readOnly />
            <label htmlFor="V0" onClick={() => this.handleRadioChange(0)}>
              V0
            </label>
            <input type="radio" id="V1" name="level" value={1} checked={level === 1} readOnly />
            <label htmlFor="V1" onClick={() => this.handleRadioChange(1)}>
              V1
            </label>
            <input type="radio" id="V2" name="level" value={2} checked={level === 2} readOnly />
            <label htmlFor="V2" onClick={() => this.handleRadioChange(2)}>
              V2
            </label>
            <input type="radio" id="V3" name="level" value={3} checked={level === 3} readOnly />
            <label htmlFor="V3" onClick={() => this.handleRadioChange(3)}>
              V3
            </label>
            <input type="radio" id="V4" name="level" value={4} checked={level === 4} readOnly />
            <label htmlFor="V4" onClick={() => this.handleRadioChange(4)}>
              V4
            </label>
            <input type="radio" id="V5" name="level" value={5} checked={level === 5} readOnly />
            <label htmlFor="V5" onClick={() => this.handleRadioChange(5)}>
              V5
            </label>
            <input type="radio" id="V6" name="level" value={6} checked={level === 6} readOnly />
            <label htmlFor="V6" onClick={() => this.handleRadioChange(6)}>
              V6
            </label>
            <input type="radio" id="V7" name="level" value={7} checked={level === 7} readOnly />
            <label htmlFor="V7" onClick={() => this.handleRadioChange(7)}>
              V7
            </label>
            <input type="radio" id="V8" name="level" value={8} checked={level === 8} readOnly />
            <label htmlFor="V8" onClick={() => this.handleRadioChange(8)}>
              V8
            </label>
            <input type="radio" id="V9" name="level" value={9} checked={level === 9} readOnly />
            <label htmlFor="V9" onClick={() => this.handleRadioChange(9)}>
              V9
            </label>
          </div>
          <label className={styles["form-label"]}>Add Note</label>
          <textarea className={styles.noteBox} id="note" value={note} onChange={this.handleNoteChange}></textarea>
        </form>
        <button className={styles.button} onClick={this.handleClick}>
          Send it!
        </button>
        {isLogged ? <span className={styles.saveMsg}>Your log is saved! 🧗🏻‍♀️</span> : null}
      </div>
    );
  }
}

export default LogPage;
