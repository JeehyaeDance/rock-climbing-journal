import React from "react";
import axios from "axios";
import styles from "./style/CreateAcc.css";

class CreateAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accUserName: "",
      accPassword: ""
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
    let userName = this.state.accUserName;
    let password = this.state.accPassword;
    let user = {
      userName: userName,
      password: password
    };
    if (userName != "" && password != "") {
      axios
        .post("/createAcc", user)
        .then(response => {
          console.log(response);
          let result = response.data;
          if (result == "user exist") {
            alert("this username is already taken");
          } else {
            this.props.toggleLoginPage();
            //can automatically login with userid later
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert("please fill out form correctly");
    }
  }

  render() {
    return (
      <div className={styles.centerPiece}>
        <div className={styles.leftSide}>
          <div>
            <h1>Sign Up</h1>
            <form>
              <label>User Name</label>
              <input id="accUserName" type="text" value={this.state.accUserName} onChange={this.changeHandler} />
              <label>Password</label>
              <input id="accPassword" type="password" value={this.state.accPassword} onChange={this.changeHandler} />
            </form>
            <button id="realCreateAcc" onClick={this.clickHandler}>
              Create Account
            </button>
            <div className={styles.havAcc}>
              <span>Already have an account?</span>
              <span className={styles.loginBtn} id="loginBtn" onClick={this.props.toggleLoginPage}>
                Login
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    );
  }
}

export default CreateAcc;
