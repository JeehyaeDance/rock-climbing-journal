import React from "react";
import styles from "./style/LogIn.css";
import axios from "axios";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.changePage(e.target.id);
  }

  logIn(e) {
    e.preventDefault();
    axios
      .get(`/login/${this.state.userName}`)
      .then(response => {
        let loginInfo = response.data;
        if (loginInfo.email === this.state.email) {
          this.props.changePage("LogPage");
          this.props.setUserId(loginInfo.userid);
        } else {
          alert("your Log In information is not correct");
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className={styles.centerPiece}>
        <h1>ROCK CLIMBING AWAY~!</h1>
        <div className={styles.startOption}>
          <form>
            <label>
              User Name
              <input id="userName" type="text" value={this.state.userName} onChange={this.changeHandler} />
            </label>
            <label>
              Email
              <input
                id="email"
                type="email"
                pattern="local@domain"
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </label>
          </form>
          <button id="LogIn" onClick={this.logIn}>
            Log In
          </button>
          <div>
            <nav>Need an account?</nav>
            <button id="CreateAcc" onClick={this.clickHandler}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
