import React from "react";
import styles from "./style/LogPage.css";
import axios from "axios";
import Stat from "./Stat.jsx";
import PlusIcon from "./PlusIcon.jsx";
import GraphIcon from "./GraphIcon.jsx";

class LogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      note: "",
      userId: this.props.userId,
      isLogged: false,
      toggleStat: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleStats = this.toggleStats.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  toggleStats() {
    this.setState(({ toggleStat }) => ({
      toggleStat: !toggleStat
    }));
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
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { toggleStat, level, userId, isLogged, note } = this.state;
    return (
      <div className={styles.background}>
        <div className={styles.mainBox}>
          <div className={styles.navBar}>
            <div className={styles.navBtn}>
              <PlusIcon />
            </div>
            <div className={styles.navBtn} onClick={this.toggleStats}>
              <GraphIcon />
            </div>
          </div>
          {toggleStat ? (
            <Stat userId={userId} />
          ) : (
            <div className={styles.centerPiece}>
              <h1>Climbing Log</h1>
              <form className={styles.formStyle}>
                <label>Level</label>
                <select id="level" value={level} onChange={this.handleChange}>
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
                </select>
                <label>Note</label>
                <input className={styles.noteBox} id="note" type="text" value={note} onChange={this.handleChange} />
              </form>
              <button onClick={this.handleClick}>Save</button>
              {isLogged ? <span className={styles.saveMsg}>Your log is saved! 🧗🏻‍♀️</span> : null}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LogPage;
