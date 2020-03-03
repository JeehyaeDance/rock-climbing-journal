import React from "react";
import styles from "./style/LogPage.css";
import axios from "axios";
import RadioBtn from "./RadioBtn.jsx";

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
            <RadioBtn level={0} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={1} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={2} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={3} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={4} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={5} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={6} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={7} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={8} stateLevel={level} handleRadioChange={this.handleRadioChange} />
            <RadioBtn level={9} stateLevel={level} handleRadioChange={this.handleRadioChange} />
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
