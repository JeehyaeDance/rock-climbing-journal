import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./style/Option.css";

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newVal: "",
      updated: false
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      newVal: e.target.value
    });
  }

  clickHandler(e) {
    e.preventDefault();
    let currOption = this.props.match.params.option;
    let userInfo = {
      userId: this.props.userId,
      newVal: this.state.newVal
    };

    if (currOption === "User Name") {
      axios
        .put("/xUserName", userInfo)
        .then(response => {
          this.setState({
            newVal: "",
            updated: true
          });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      axios
        .put("/xPassword", userInfo)
        .then(response => {
          this.setState({
            newVal: "",
            updated: true
          });
        })
        .catch(e => console.log(e));
    }
  }

  render() {
    let { params } = this.props.match;
    let option = params.option;
    let { newVal, updated } = this.state;
    return (
      <>
        <h2 className={styles["sub-title"]}>{option}</h2>
        <div className={styles["sub-form"]}>
          <input className={styles.input} type="text" value={newVal} onChange={this.changeHandler} />
          <button className={styles.button} onClick={this.clickHandler}>
            Update
          </button>
          {updated ? <div>Your {option} has updated.</div> : null}
        </div>
      </>
    );
  }
}

export default withRouter(Option);
