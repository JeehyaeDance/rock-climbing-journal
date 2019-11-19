import React from "react";
import axios from "axios";
import styles from "./style/CreateAcc.css";

class CreateAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accUserName: "",
      accEmail: ""
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
    axios
      .post("/user", {
        userName: this.state.accUserName,
        email: this.state.accEmail
      })
      .then(response => {
        console.log(response);
        this.props.changePage("LogIn");
      })
      .catch(error => {
        console.log(error);
        alert("this username is already taken");
      });
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
            Email
            <input
              id="accEmail"
              type="email"
              pattern="local@domain"
              value={this.state.accEmail}
              onChange={this.changeHandler}
            />
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
