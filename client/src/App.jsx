import React from "react";
import LogIn from "./LogIn.jsx";
import CreateAcc from "./CreateAcc.jsx";
import LogPage from "./LogPage.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: "LogIn",
      userId: 0
    };
    this.changePage = this.changePage.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  setUserId(id) {
    this.setState({
      userId: id
    });
  }

  render() {
    let loadPage = this.state.currentPage;
    return (
      <div>
        {loadPage === "LogIn" ? <LogIn changePage={this.changePage} setUserId={this.setUserId} /> : null}
        {loadPage === "CreateAcc" ? <CreateAcc changePage={this.changePage} /> : null}
        {loadPage === "LogPage" ? <LogPage userId={this.state.userId} /> : null}
      </div>
    );
  }
}

export default App;
