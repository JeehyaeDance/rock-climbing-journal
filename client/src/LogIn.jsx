import React from "react";
import styles from "./style/LogIn.css";
import Header from "./Header.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import Page from "./Page";

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
          console.log("loginInfo", loginInfo);
          if (loginInfo !== "invalid login") {
            console.log("logged in!");
            this.props.logInState(loginInfo, true);
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
    let { userName, password } = this.state;
    return (
      <Page className={styles["login-page"]}>
        <h1>Login</h1>
        <div className={styles.loginForm}>
          <div className={styles.loginBox}>
            <input
              className={styles.input}
              placeholder="User Name"
              id="userName"
              type="text"
              value={userName}
              onChange={this.changeHandler}
            />
            <input
              className={styles.input}
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <button id="LogIn" onClick={this.logIn}>
            Log In
          </button>
        </div>
      </Page>
    );
  }
}

export default LogIn;
