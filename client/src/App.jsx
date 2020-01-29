import React from "react";
import LogIn from "./LogIn.jsx";
import CreateAcc from "./CreateAcc.jsx";
import LogPage from "./LogPage.jsx";
import axios from "axios";

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

  componentDidMount() {
    if (!this.state.userId) {
      axios
        .create({ withCredentials: true })
        .get("/api")
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e));
    }
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
