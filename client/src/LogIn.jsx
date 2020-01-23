import React from "react";
import styles from "./style/LogIn.css";
import axios from "axios";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  logIn(e) {
    e.preventDefault();
    //need to check if username and email is empty
    let userName = this.state.userName;
    let password = this.state.password;
    let user = {
      userName: userName,
      password: password
    };
    if (userName != "" && password != "") {
      axios
        .post("/login", user, { withCredentials: true })
        .then(response => {
          let loginInfo = response.data;
          if (loginInfo != "invalid login") {
            this.props.toggleLoginPage();
            this.props.setUserId(loginInfo.userid);
          } else {
            alert("your Log In information is not correct");
          }
        })
        .catch(error => console.log(error));
    } else {
      alert("please fill out form correctly");
    }
  }

  render() {
    return (
      <div className={styles.centerPiece}>
        <div className={styles.leftSide}>
          <div>
            <h1>Login</h1>
            <div className={styles.loginForm}>
              <form className={styles.loginBox}>
                <label>User Name</label>
                <input id="userName" type="text" value={this.state.userName} onChange={this.changeHandler} />
                <label>Password</label>
                <input id="password" type="password" value={this.state.password} onChange={this.changeHandler} />
              </form>
              <button id="LogIn" onClick={this.logIn}>
                Log In
              </button>
            </div>
            <div className={styles.needAcc}>
              <span>Need an account? </span>
              <span className={styles.createBtn} id="CreateAcc" onClick={this.props.toggleLoginPage}>
                Create Account
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <p>WELCOME TO CLIMBING DAY</p>
        </div>
      </div>
    );
  }
}

export default LogIn;
