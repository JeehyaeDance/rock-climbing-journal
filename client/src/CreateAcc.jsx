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

    // axios
    //   .post("/user", {
    //     userName: this.state.accUserName,
    //     email: this.state.accPassword
    //   })
    //   .then(response => {
    //     console.log(response);
    //     this.props.toggleLoginPage();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     alert("this username is already taken");
    //   });
  }

  render() {
    return (
      <div className={styles.centerPiece}>
        <form>
          <label>
            User Name
            <input id="accUserName" type="text" value={this.state.accUserName} onChange={this.changeHandler} />
          </label>
          <label>
            Password
            <input id="accPassword" type="password" value={this.state.accPassword} onChange={this.changeHandler} />
          </label>
        </form>
        <button id="realCreateAcc" onClick={this.clickHandler}>
          Create Account
        </button>
      </div>
    );
  }
}

export default CreateAcc;
