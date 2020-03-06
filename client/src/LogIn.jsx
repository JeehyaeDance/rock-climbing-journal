import React from "react";
import axios from "axios";
import Form from "./Form";
import { withRouter } from "react-router";

function LogIn(props) {
  let logIn = (userName, password, cb) => {
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
            props.history.replace("/");
            cb(loginInfo, true);
          } else {
            alert("your Log In information is not correct");
          }
        })
        .catch(error => console.log(error));
    } else {
      alert("please fill out form correctly");
    }
  };

  return (
    <>
      <Form type="Login" clickHandler={logIn} cb={props.logInState} />
    </>
  );
}

export default withRouter(LogIn);
