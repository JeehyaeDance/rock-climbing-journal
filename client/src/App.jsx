import React from "react";
import LogIn from "./LogIn.jsx";
import CreateAcc from "./CreateAcc.jsx";
import LogPage from "./LogPage.jsx";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: undefined
    };

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

  setUserId(id) {
    this.setState({
      userId: id
    });
  }

  render() {
    const { userId } = this.state;
    return (
      <div>
        {userId ? <LogPage userId={userId} /> : showLoginPage ? <LogIn setUserId={this.setUserId} /> : <CreateAcc />}
      </div>
    );
  }
}

export default App;
