import React from "react";
import LogIn from "./LogIn.jsx";
import CreateAcc from "./CreateAcc.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: "LogIn"
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    let loadPage = this.state.currentPage;
    return (
      <div>
        {loadPage === "LogIn" ? <LogIn changePage={this.changePage} /> : null}
        {loadPage === "CreateAcc" ? <CreateAcc /> : null}
      </div>
    );
  }
}

export default App;
