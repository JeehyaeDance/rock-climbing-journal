import React from "react";
import styles from "./style/LogIn.css";
import Header from "./Header.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

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
    return (
      <div className={styles.allFont}>
        <Header />
        <div className={styles.loginPage}>
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
          </div>
          <div className={styles.needAcc}>
            <span>Need an account? </span>
            <Link to="/createAcc" className={styles.createBtn} id="CreateAcc">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
