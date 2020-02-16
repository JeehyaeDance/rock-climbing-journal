import React from "react";
import { PrivateRouter, PublicRouter } from "./Router.jsx";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: undefined,
      username: "",
      userid: 0
    };

    this.logInState = this.logInState.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/auth`)
      .then(response => {
        this.logInState(response.data, true);
      })
      .catch(e => {
        this.setState({
          isLoggedIn: false
        });
      });
  }

  logInState(info, success) {
    this.setState({
      isLoggedIn: success,
      username: info.username,
      userid: info.userid
    });
  }

  render() {
    const userInfo = {
      userName: this.state.username,
      userId: this.state.userid
    };
    return this.state.isLoggedIn === undefined ? null : (
      <div>
        {this.state.isLoggedIn ? (
          <PrivateRouter userInfo={userInfo} logInState={this.logInState} />
        ) : (
          <PublicRouter logInState={this.logInState} />
        )}
      </div>
    );
  }
}

export default App;
