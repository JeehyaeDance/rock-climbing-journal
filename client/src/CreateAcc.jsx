import React from "react";
import axios from "axios";

class CreateAcc extends React.Component {
  constructor() {
    super();
    this.state = {
      accUserName: "",
      accEmail: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
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
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
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
