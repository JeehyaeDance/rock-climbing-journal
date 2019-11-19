import React from "react";
import LogIn from "./LogIn.jsx";
import CreateAcc from "./CreateAcc.jsx";
import LogPage from "./LogPage.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoginPage: true,
      userId: undefined
    };
    this.toggleLoginPage = this.toggleLoginPage.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  toggleLoginPage() {
    this.setState(({ showLoginPage }) => ({
      showLoginPage: !showLoginPage
    }));
  }

  setUserId(id) {
    this.setState({
      userId: id
    });
  }

  render() {
    const { userId, showLoginPage } = this.state;
    return (
      <div>
        {userId ? (
          <LogPage userId={userId} />
        ) : showLoginPage ? (
          <LogIn toggleLoginPage={this.toggleLoginPage} setUserId={this.setUserId} />
        ) : (
          <CreateAcc toggleLoginPage={this.toggleLoginPage} />
        )}
      </div>
    );
  }
}

export default App;
