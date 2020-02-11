import React from "react";
import { PrivateRouter, PublicRouter } from "./Router.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return <div>{this.state.isLoggedIn ? <PrivateRouter /> : <PublicRouter />}</div>;
  }
}

export default App;
