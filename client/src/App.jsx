import React from "react";
import { PrivateRouter, PublicRouter } from "./Router.jsx";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: "",
      userid: 0
    };

    this.logInState = this.logInState.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/auth`)
      .then(response => {
        this.logInState();
        this.setState({
          username: response.data.username,
          userid: response.data.userid
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  logInState() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn
    }));
  }

  render() {
    const userInfo = {
      userName: this.state.username,
      userId: this.state.userid
    };
    return (
      <div>
        {this.state.isLoggedIn ? <PrivateRouter userInfo={userInfo} /> : <PublicRouter logInState={this.logInState} />}
      </div>
    );
  }
}

export default App;
