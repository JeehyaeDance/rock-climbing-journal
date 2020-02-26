import React from "react";
import axios from "axios";
import styles from "./style/CreateAcc.css";
import Form from "./Form.jsx";
import Page from "./Page.jsx";
import { Link } from "react-router-dom";

class CreateAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accCreated: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(userName, password) {
    let user = {
      userName: userName,
      password: password
    };
    if (userName != "" && password != "") {
      axios
        .post("/createAcc", user)
        .then(response => {
          let result = response.data;
          if (result == "user exist") {
            alert("this username is already taken");
          } else {
            this.setState(({ accCreated }) => ({
              accCreated: !accCreated
            }));
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
      <>
        {this.state.accCreated ? (
          <Page className={styles.page}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <p className={styles.message}>Your account is created, now let's go climb! 🧗🏻‍♀️</p>
            <Link to="/" className={styles.button} id="loginBtn">
              Login
            </Link>
          </Page>
        ) : (
          <Form type="Create Account" clickHandler={this.clickHandler} />
        )}
      </>
    );
  }
}

export default CreateAcc;
