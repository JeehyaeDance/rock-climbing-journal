import React from "react";
import { PrivateRouter, PublicRouter } from "./Router.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };

    this.logInState = this.logInState.bind(this);
  }

  logInState() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn
    }));
  }

  render() {
    return <div>{this.state.isLoggedIn ? <PrivateRouter /> : <PublicRouter logInState={this.logInState} />}</div>;
  }
}

export default App;
