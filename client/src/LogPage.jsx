import React from "react";
import styles from "./style/LogPage.css";
import axios from "axios";

class LogPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
    console.log(this.state.userId);
    axios
      .post("/log", {
        level: this.state.level,
        note: this.state.note,
        userId: this.state.userId
      })
      .then(response => {
        this.setState({ isLogged: !this.state.isLogged });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={styles.centerPiece}>
        <nav>Climbing Log</nav>
        <form>
          <label>
            Level
            <select id="level" value={this.state.level} onChange={this.handleChange}>
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
          </label>
          <label>
            Note
            <input id="note" type="text" value={this.state.note} onChange={this.handleChange} />
          </label>
        </form>
        <button onClick={this.handleClick}>Save</button>
        {this.state.isLogged ? <nav>Your log is saved</nav> : null}
      </div>
    );
  }
}

export default LogPage;