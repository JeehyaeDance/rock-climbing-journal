import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./style/Option.css";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newusername: "",
      updated: false
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  clickHandler(e) {
    e.preventDefault();
    let userInfo = {
      userId: this.props.userId,
      newusername: this.state.newusername
    };
    axios
      .put("/xUserName", userInfo)
      .then(response => {
        this.setState({
          newusername: "",
          updated: true
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    let { params } = this.props.match;
    let option = params.option;
    let { newusername, updated } = this.state;
    return (
      <>
        <h2 className={styles["sub-title"]}>{option}</h2>
        <div className={styles["sub-form"]}>
          <input
            className={styles.input}
            id="newusername"
            type="text"
            value={newusername}
            onChange={this.changeHandler}
          />
          <button className={styles.button} onClick={this.clickHandler}>
            Update
          </button>
          {updated ? <div>Your User Name has updated.</div> : null}
        </div>
      </>
    );
  }
}

export default withRouter(Option);
