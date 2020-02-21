import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Option from "./Option.jsx";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { path, url } = this.props.match;
    return (
      <div>
        <h1>Setting</h1>
        <div>
          <span>
            <Link to={`${url}/changeUserName`}>Changing User Name</Link>
          </span>
        </div>
        <Switch>
          <Route exact path={path}>
            <span>Please select option.</span>
          </Route>
          <Route path={`${path}/:option`}>
            <Option />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Setting);
